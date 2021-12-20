import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';

@Module({
  imports: [],
  controllers: [
    UsuarioController
  ],
  providers: [],
})
export class AppModule {}
