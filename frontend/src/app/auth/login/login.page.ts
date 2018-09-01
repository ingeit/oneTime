import { Component } from '@angular/core';
import { Usuario } from "../usuario.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

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
  passwordRepeat: string;

  isReadyToSave: boolean;
  submitAttempt: boolean;
  formSubmitAttempt: boolean;

  form: FormGroup;

  validation_messages = {
    nombre: [
      { type: 'required', message: 'Ingrese nombre!' }
    ],
    apellido: [
      { type: 'required', message: 'Ingrese apellido!' }
    ],
  }

  constructor(private authSrv: AuthService, private formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      mail: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

  }

  async registrarUsuario() {
    this.formSubmitAttempt = true;

    this.us = {
      nombre: this.nombre,
      apellido: this.apellido,
      mail: this.mail,
      username: this.username,
      password: this.password
    }

    !this.form.valid ? console.log("form para registrar NO es valido") : console.log("form para registrar es valido");

    if (this.form.valid) {
      this.authSrv.registrar(this.us).then(res => {

        // this.mostrarModal(res,'green');
        console.log('Todo bien, usuario registrado! :D', res);

      }).catch(e => console.log('Todo MAL, ERROR', e));
    }
  }

}
