import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { BarraDeNavegacionComponent } from './barra-de-navegacion/barra-de-navegacion.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BolsaPrepagoComponent } from './paginas/bolsa-prepago/bolsa-prepago.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    MenuLateralComponent,
    BolsaPrepagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
