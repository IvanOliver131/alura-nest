import { Injectable } from "@nestjs/common";


//Com o Injectable não preciso criar um new nomeService()
@Injectable()
export class UsuarioService {
 private usuarios = [];

  public criaUsuario(usuario) {
    this.usuarios.push(usuario);

    return usuario;
  }

  public listaUsuarios() {
    return this.usuarios;
  }

  public listaUsuario(nameUsuario) {
    this.usuarios.map((usuario) => {
      if(usuario.name == nameUsuario ){
        return usuario;
      }
    })

  }
}