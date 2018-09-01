import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPage } from './auth/register/register.page';
import { LoginPage } from './auth/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' }, //aqui deberia redirigir a login
  { path: 'register', component: RegisterPage },
  { path: 'login', component: LoginPage }

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
