import { Component, OnInit } from '@angular/core';
import { Busqueda } from '../busqueda'
import { UserService } from '../user.service';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-panel-de-busqueda',
  templateUrl: './panel-de-busqueda.component.html',
  styleUrls: ['./panel-de-busqueda.component.css']
})
export class PanelDeBusquedaComponent implements OnInit {

  busqueda_model: Busqueda;
  showLoader: boolean;

  constructor(public userService: UserService, public paisesService: PaisesService) { 
    this.busqueda_model = { pais: null };
    this.showLoader = false;
  }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises() {
    console.log(" ======== funcion cargarPaises ======== ");
    // this.paisesService.getAll(this.userService.getToken());
  }

  buscar() {
    console.log(" ======== funcion buscar ======== ");
  }


}
