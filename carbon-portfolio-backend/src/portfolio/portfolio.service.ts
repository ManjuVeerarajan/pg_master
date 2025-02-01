import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Project} from "./project.entity";
import {Repository} from "typeorm";

@Injectable()
export class PortfolioService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>
    ) {}

    async generatePortfolio(requestedTons: number): Promise<(Project & { allocatedTons: number })[]>  {
        const projects = await this.projectRepository.find();

        const totalWeight = projects.reduce((sum, project) => {
            const weight = parseFloat(project.distribution_weight.toString());
            return sum + weight;
        }, 0);
        console.log('Total Weight:', totalWeight);


        const portfolio = projects.map(project => {
            const allocatedTons = Math.min(
              Math.floor(requestedTons * (project.distribution_weight / totalWeight)),
              project.offered_volume_in_tons);

            return {
                ...project,
                allocatedTons
            };

        });
        let totalAllocatedTons = portfolio.reduce((sum, project) => sum + project.allocatedTons, 0);
        console.log('Total Allocated Tons:', totalAllocatedTons);
        if(totalAllocatedTons < requestedTons) {
            const remainingTons = requestedTons - totalAllocatedTons;
            console.log('Remaining Tons:', remainingTons);
            this.distributeRemainingTons(portfolio, remainingTons);
            totalAllocatedTons = portfolio.reduce((sum, project) => sum + project.allocatedTons, 0);
            console.log('Final Total Allocated Tons:', totalAllocatedTons);
        }

        if (totalAllocatedTons > requestedTons) {
            this.adjustAllocation(portfolio, totalAllocatedTons - requestedTons);
        }
        return portfolio.filter(project => project.allocatedTons > 0);
    }

    private distributeRemainingTons(
        portfolio: (Project & { allocatedTons: number })[],
        remainingTons: number,
    ) {
        let index = 0;
        while (remainingTons > 0 && index < portfolio.length) {
            const project = portfolio[index];
            const additionalTons = Math.min(remainingTons, project.offered_volume_in_tons - project.allocatedTons);
            project.allocatedTons += additionalTons;
            remainingTons -= additionalTons;
            index++;
        }
    }

    private adjustAllocation(
      portfolio: (Project & { allocatedTons: number })[],
      excessTons: number,
    ) {
        let index = portfolio.length - 1;
        while (excessTons > 0 && index >= 0) {
            const project = portfolio[index];
            const reduction = Math.min(excessTons, project.allocatedTons);
            project.allocatedTons -= reduction;
            excessTons -= reduction;
            index--;
        }
    }
}
