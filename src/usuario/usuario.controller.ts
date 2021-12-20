import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

  // private  usuarioService = new UsuarioService();
  constructor(
    private usuarioService: UsuarioService
  ) {}

  @Post()
  public criaUsuario(@Body() usuario) {
    const usuarioCriado = this.usuarioService.criaUsuario(usuario);

    return usuarioCriado;
  }

  @Get()
  public listaUsuarios() {
    const listaUsuarios = this.usuarioService.listaUsuarios();
  
    return listaUsuarios;
  }

  @Get('nomeUsuario') 
  public listaUsuario(@Param() nomeUsuario) {
    console.log('oie')
    const listaUsuario = this.usuarioService.listaUsuario(nomeUsuario);

    return listaUsuario;
  }
}