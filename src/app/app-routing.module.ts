import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'listas', loadChildren: './listas/listas.module#ListasPageModule' },
  { path: 'modal', loadChildren: './modal/modal/modal.module#ModalPageModule' },
  { path: 'mapa', loadChildren: './modal/mapa/mapa.module#MapaPageModule' },
  { path: 'mapa-principal', loadChildren: './mapaPrincipal/mapa-principal/mapa-principal.module#MapaPrincipalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
