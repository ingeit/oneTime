import { Component } from '@angular/core';
import { UserService } from "../../providers";
import { Usuario } from "../../models/Usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  us: Usuario;
  nombre: string;
  apellido: string;
  mail: string;
  username: string;
  password: string;
  
  constructor(private userSrv: UserService) {
   }
  
  async registrarUsuario() {
    this.us = {
      nombre: this.nombre,
      apellido: this.apellido,
      mail: this.mail,
      username: this.username,
      password: this.password
    }
    this.userSrv.registrar(this.us).then(res => {
      // this.mostrarModal(res,'green');
      console.log('Todo bien, usuario registrado! :D', res);
    }).catch(e => console.log('Todo MAL, ERROR', e));
  }

}
