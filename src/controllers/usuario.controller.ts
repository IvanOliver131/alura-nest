import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('users')

export class UsuarioController {
  
  private usuarios = [];

  @Post()
  public criaUsuario(@Body() usuario) {
    this.usuarios.push(usuario);

    return usuario;
  }

  @Get()
  public listaUsuario(){
    return this.usuarios;
  }
}