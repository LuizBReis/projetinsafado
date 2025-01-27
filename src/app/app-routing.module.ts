import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProfileComponent } from './pages/profile/profile.component'; // Adicione o ProfileComponent
import { CadastroPetComponent } from './pages/cadastro-pet/cadastro-pet.component'; // Importe o CadastroPetComponent

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para login se estiver vazio
  { path: 'login', component: LoginComponent }, // Página de login
  { path: 'registro', component: RegistroComponent }, // Página de registro
  { path: 'inicio', component: InicioComponent }, // Página inicial (home) após login
  { path: 'profile', component: ProfileComponent }, // Página de perfil
  { path: 'cadastro-pet', component: CadastroPetComponent }, // Página de cadastro de pet
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
