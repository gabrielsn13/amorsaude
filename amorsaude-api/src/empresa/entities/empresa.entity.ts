import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Empresa {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    sku: string;
  
    @Column('text')
    description: string;
  
    @Column()
    price: number;
  
    @Column()
    stock: number;
}
