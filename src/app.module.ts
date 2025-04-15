import { Module, ValidationPipe } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { APP_PIPE } from '@nestjs/core';
import { CartItemModule } from './cart-item/cart-item.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule, CategoryModule, CartItemModule],
  controllers: [],
  providers: [{
    provide: APP_PIPE,
    useClass: ValidationPipe
  },
  ],
})
export class AppModule { }
