import { Component } from '@angular/core';
import { UserService } from "../../providers";
import { Usuario } from "../../models/Usuario";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage {

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

  constructor(private userSrv: UserService, private formBuilder: FormBuilder) {

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
    console.log('mostrando valores',this.form.value)
    this.us = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      mail: this.form.value.mail,
      username: this.form.value.username,
      password: this.form.value.password
    }

    console.log(this.us)  

    !this.form.valid ? console.log("form para registrar NO es valido") : console.log("form para registrar es valido");

    if (this.form.valid) {
      this.userSrv.registrar(this.form.value).then(res => {

        // this.mostrarModal(res,'green');
        console.log('Todo bien, usuario registrado! :D', res);

      }).catch(e => console.log('Todo MAL, ERROR', e));
    }
  }

}
