import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { LoginComponent }       from './login/login.component';
import { PanelDeBusquedaComponent }       from './panel-de-busqueda/panel-de-busqueda.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel-de-busqueda', component: PanelDeBusquedaComponent },
  { path: '', redirectTo: 'panel-de-busqueda', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
