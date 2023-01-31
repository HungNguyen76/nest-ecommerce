import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class VideoEmbed {
  @Column({ type: 'varchar', name: 'imgsrc' })
  imgsrc: string;

  @Column({ type: 'varchar', name: 'clip' })
  clip: string;
}

export class SocialLink {
  @Column({ type: 'varchar', name: 'icon' })
  public readonly icon: string;

  @Column({ type: 'varchar', name: 'url' })
  public readonly url: string;
}

@Entity({ name: 'tb_hero' })
export class HeroEntity {
  @PrimaryGeneratedColumn()
  public readonly _id?: string;

  @Column({ type: 'varchar', name: 'title' })
  public readonly title: string;

  @Column({ type: 'varchar', name: 'subtitle' })
  public readonly subtitle: string;

  @Column({ type: 'varchar', name: 'img' })
  public readonly img: string;

  @Column({ type: 'varchar', name: 'btntext' })
  public readonly btntext: string;

  @Column({ type: 'jsonb', name: 'videos', array: false, default: [] })
  public readonly videos: VideoEmbed[];

  @Column({ type: 'jsonb', name: 'socialLinks', array: false, default: [] })
  public readonly sociallinks: SocialLink[];
}
