import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioService } from './portfolio.service';
import { Project } from './project.entity';
import { PortfolioController } from './portfolio.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project]),
  ],
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {
}