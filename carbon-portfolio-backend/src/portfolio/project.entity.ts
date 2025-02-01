import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    image: string;

    @Column('float')
    price_per_ton: number;

    @Column('int')
    offered_volume_in_tons: number;

    @Column('float')
    distribution_weight: number;

    @Column()
    supplier_name: string;

    @Column()
    earliest_delivery: string;

    @Column()
    description: string;
}
