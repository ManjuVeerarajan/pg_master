import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import {PortfolioService} from "./portfolio.service";

@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    @Get('generate')
    async generatePortfolio(@Query('tons') requestedTons: number) {
        if (requestedTons < 0) {
            throw new BadRequestException('Invalid input');
        }
        return this.portfolioService.generatePortfolio(requestedTons);
    }
}
