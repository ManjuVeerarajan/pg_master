import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './portfolio/project.entity';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'password',
            database: 'mydatabase',
            entities: [Project],
            synchronize: false,
        }),
        PortfolioModule,
    ]
})
export class AppModule {}