import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_heading' })
export class HeadingEntity {
  @PrimaryGeneratedColumn()
  public readonly _id: string;

  @Column({ type: 'varchar', name: 'heading' })
  public readonly heading: string;

  @Column({ type: 'varchar', name: 'title' })
  public readonly title: string;

  @Column({ type: 'varchar', name: 'text' })
  public readonly text: string;

  @Column({ type: 'varchar', name: 'btn' })
  public readonly btn: string;

  @Column({ type: 'varchar', name: 'url' })
  public readonly url: string;

  @Column({ type: 'varchar', name: 'img' })
  public readonly img: string;
}
