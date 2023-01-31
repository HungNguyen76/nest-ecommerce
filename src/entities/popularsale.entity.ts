import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class ImagePopularSale {
  @Column({ type: 'varchar', name: 'id' })
  public readonly id: string;

  @Column({ type: 'varchar', name: 'url' })
  public readonly url: string;

  @Column({ type: 'varchar', name: 'filename' })
  public readonly filename: string;
}

@Entity({ name: 'tb_popular_sales' })
export class PopularSaleEntity {
  @PrimaryGeneratedColumn()
  public readonly _id?: string;

  @Column({ type: 'varchar', name: 'title' })
  public readonly title: string;

  @Column({ type: 'varchar', name: 'text' })
  public readonly text: string;

  @Column({ type: 'varchar', name: 'rating' })
  public readonly rating: string;

  @Column({ type: 'float', name: 'star' })
  public readonly stars: number;

  @Column({ type: 'varchar', name: 'btn' })
  public readonly btn: string;

  @Column({ type: 'varchar', name: 'img' })
  public readonly img: string;

  @Column({ type: 'varchar', name: 'price', default: '0' })
  public readonly price: string;

  @Column({ type: 'int', name: 'review', default: 0 })
  public readonly reviews: number;

  @Column({ type: 'jsonb', name: 'images', array: false, default: [] })
  public readonly images: ImagePopularSale[];

  @Column({ type: 'varchar', name: 'description' })
  public readonly description: string;

  @Column({ type: 'varchar', name: 'color' })
  public readonly color: string;

  @Column({ type: 'varchar', name: 'shadow' })
  public readonly shadow: string;
}
