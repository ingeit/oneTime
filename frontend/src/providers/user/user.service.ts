// import 'rxjs/add/operator/toPromise';
// import { share } from "rxjs/add/operator/share";
// import "rxjs/add/operator/share";
import { Injectable } from '@angular/core';
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  login(accountInfo: any) {
    //   let seq = this.api.post('login', accountInfo).share();

    //   seq.subscribe((res: any) => {
    //     // If the API returned a successful response, mark the user as logged in
    //     if (res.status == 'success') {
    //       this._loggedIn(res);
    //     } else {
    //     }
    //   }, err => {
    //     console.error('ERROR', err);
    //   });

    //   return seq;
    // }
  }
}