import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPage } from './auth/register/register.page';
import { LoginPage } from './auth/login/login.page';
import { WelcomePage } from "./welcome/welcome.page";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePage },
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
