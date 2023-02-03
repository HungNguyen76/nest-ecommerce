import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSchema } from './schema/database.validation';
import { HeroModule } from './hero/hero.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HeadingModule } from './heading/heading.module';
import { PopularSaleModule } from './popularsale/popularsale.module';
import { StoryModule } from './story/story.module';
import { TopRateSaleModule } from './topratesale/topratesale.module';
import { FooterModule } from './footer/footer.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: databaseSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('PG_HOST'),
        port: +configService.get('PG_PORT'),
        username: configService.get('PG_USERNAME'),
        password: configService.get('PG_PASSWORD'),
        database: configService.get('PG_DB_NAME'),
        entities: [__dirname + '/entities/*.entity{.ts,.js}'],
        ssl: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    HeroModule,
    HeadingModule,
    PopularSaleModule,
    StoryModule,
    TopRateSaleModule,
    FooterModule,
    ProductModule,
  ],
})
export class AppModule {}
