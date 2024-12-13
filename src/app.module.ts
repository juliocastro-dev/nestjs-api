import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsController } from './products/public/products.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ProductsModule, AuthModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
