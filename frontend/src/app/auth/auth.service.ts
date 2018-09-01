import { Injectable } from '@angular/core';
import { ApiService } from "../../providers/api/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  registrar(user) {
    console.log('TCL: AuthService -> registrar -> user', user);
    return new Promise((resolve, reject) => {
      this.api.post('auth/register', user).then(res => {
        resolve(res);
      }).catch(e => {
        switch (e.status) {
          case 500:
            reject('ERROR 500 re loco');
            break;
          default:
            reject(e);
            break;
        }
      })
    });
  }
}