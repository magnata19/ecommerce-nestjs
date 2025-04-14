import { Module, ValidationPipe } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UserModule, AuthModule, ProductModule, CategoryModule],
  controllers: [],
  providers: [{
    provide: APP_PIPE,
    useClass: ValidationPipe
  }],
})
export class AppModule { }
