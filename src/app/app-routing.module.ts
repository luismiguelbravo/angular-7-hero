import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolsaPrepagoComponent } from './paginas/bolsa-prepago/bolsa-prepago.component';

const routes: Routes = [
  { path: 'bolsa-prepago', component: BolsaPrepagoComponent },
  { path: '', redirectTo: 'bolsa-prepago', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
