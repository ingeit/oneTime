import { Component } from '@angular/core';
import { UserService } from "../../providers/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  account: {
    email: string, password: string;
  }

  constructor() { }

  doLogin() {
  }

}
