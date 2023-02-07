import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ISize } from '../product/interface/product.interface';
import { ProductEntity } from './product.entity';

@Entity({ name: 'tb_product_color' })
export class ProductColorEntity {
  @PrimaryColumn({
    name: '_id',
    type: 'varchar',
    unique: true,
    nullable: false,
    comment: 'id of product color',
  })
  public readonly _id: string;

  @Column({
    name: 'img',
    type: 'jsonb',
    array: false,
    default: [],
    comment: 'image colors detail',
  })
  public readonly img: string[];

  @Column({
    name: 'sizes',
    type: 'jsonb',
    array: false,
    default: [],
    comment: 'sizes element of product',
  })
  public readonly sizes: ISize[];

  @Column({
    name: 'price',
    type: 'float',
    comment: 'price of product',
  })
  public readonly price: number;

  @ManyToOne(() => ProductEntity, (product) => product.productColors)
  public readonly product: ProductEntity;
}
