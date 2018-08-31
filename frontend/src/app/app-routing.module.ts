import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInPage } from '../pages/signin/signin.page';
import { SignUpPage } from '../pages/signup/signup.page';

const routes: Routes = [
  {
    path: '', redirectTo: 'signin', pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomePageModule'
  // },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'signin',
    // loadChildren: './signin/signin.module#LoginPageModule'
    component: SignInPage
  },
  {
    path: 'signup',
    // loadChildren: './signin/signin.module#LoginPageModule'
    component: SignUpPage
  }
];

// const routes: Routes = [
//   { path: '', redirectTo: '/signin', pathMatch: 'full' },
//   { path: 'signin', component: LoginPage }, //carga la page por encima del routeroutlet
//   { path: 'home', loadChildren: './home/home.module#HomePageModule' } //carga la page sobre el routeroutlet
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
