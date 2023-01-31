import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface ITitleFooter {
  title: string;
}

export interface ILinkFooter {
  link: string;
}

@Entity({ name: 'tb_footer' })
export class FooterEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  public readonly _id: string;

  @Column({ type: 'jsonb', name: 'titles', array: false, default: [] })
  public readonly titles: ITitleFooter[];

  @Column({ type: 'jsonb', name: 'links', array: false, default: [] })
  public readonly links: ILinkFooter[][];
}
