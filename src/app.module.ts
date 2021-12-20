import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
  imports: [],
  controllers: [
    UsuarioController
  ],
  providers: [],
})
export class AppModule {}
