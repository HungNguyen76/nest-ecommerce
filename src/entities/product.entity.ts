import { TypeProduct } from 'src/product/interface/product.interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductColorEntity } from './productColor.entity';

@Entity({ name: 'tb_product' })
export class ProductEntity {
  @PrimaryColumn({
    name: '_id',
    type: 'varchar',
    unique: true,
    nullable: false,
    comment: 'id of product',
  })
  public readonly _id: string;

  @Column({
    name: 'image',
    type: 'varchar',
    default: '',
    comment: 'main image product',
  })
  public readonly image: string;

  @Column({
    name: 'new',
    type: 'boolean',
    default: true,
    comment: 'status of product',
  })
  public readonly new: boolean;

  @Column({ name: 'title', type: 'varchar', comment: 'title of product' })
  public readonly title: string;

  @Column({
    name: 'type',
    type: 'enum',
    nullable: false,
    enum: TypeProduct,
  })
  public readonly type: TypeProduct;

  @Column({ name: 'subtitle', type: 'varchar', comment: 'subtitle of product' })
  public readonly subtitle: string;

  @Column({
    name: 'description',
    type: 'text',
    comment: 'description of product',
  })
  public readonly description: string;

  @Column({ name: 'color', type: 'int', comment: 'color code of product' })
  public readonly color: number;

  @Column({
    name: 'reviews',
    type: 'int',
    comment: 'reviews product from customers',
  })
  public readonly reviews: number;

  @Column({ name: 'stars', type: 'float', comment: 'rating star product' })
  public readonly stars: number;

  @CreateDateColumn({ name: 'createdDate' })
  public readonly createdDate: Date;

  @UpdateDateColumn({ name: 'updatedDate' })
  public readonly updatedDate: Date;

  @OneToMany(() => ProductColorEntity, (colors) => colors.product)
  public readonly productColors: ProductColorEntity[];
}
