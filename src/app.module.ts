import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FilterExceptionHttp } from './common/filtros/filter-exception-http.filter';
import { UserModule } from './usuario/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FilterExceptionHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
