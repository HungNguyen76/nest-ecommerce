import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_story' })
export class StoryEntity {
  @PrimaryGeneratedColumn()
  public readonly _id: string;

  @Column({ type: 'varchar', name: 'title' })
  public readonly title: string;

  @Column({ type: 'varchar', name: 'text' })
  public readonly text: string;

  @Column({ type: 'varchar', name: 'img' })
  public readonly img: string;

  @Column({ type: 'varchar', name: 'url' })
  public readonly url: string;

  @Column({ type: 'varchar', name: 'like' })
  public readonly like: string;

  @Column({ type: 'varchar', name: 'time' })
  public readonly time: string;

  @Column({ type: 'varchar', name: 'by' })
  public readonly by: string;

  @Column({ type: 'varchar', name: 'btn' })
  public readonly btn: string;
}
