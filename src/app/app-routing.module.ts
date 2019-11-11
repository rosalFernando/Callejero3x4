import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'listas', loadChildren: './listas/listas.module#ListasPageModule' },
  { path: 'modal', loadChildren: './modal/modal/modal.module#ModalPageModule' },
  { path: 'mapa', loadChildren: './modal/mapa/mapa.module#MapaPageModule' },
  { path: 'mapa-principal', loadChildren: './mapaPrincipal/mapa-principal/mapa-principal.module#MapaPrincipalPageModule' },  { path: 'autenticacion', loadChildren: './auth/autenticacion/autenticacion.module#AutenticacionPageModule' },
  { path: 'registro', loadChildren: './auth/registro/registro.module#RegistroPageModule' },
  { path: 'crud-comentario', loadChildren: './modal/crud-comentario/crud-comentario.module#CrudComentarioPageModule' },
  { path: 'mis-comentarios', loadChildren: './modal/mis-comentarios/mis-comentarios.module#MisComentariosPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
