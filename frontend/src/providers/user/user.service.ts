import { Injectable } from '@angular/core';
import { ApiService } from "../api/api.service";
// import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  registrar(user) {
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