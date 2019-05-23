import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-barra-de-navegacion',
    templateUrl: './barra-de-navegacion.component.html',
    styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent implements OnInit {

    mostrarMenu = true;

    constructor() { }

    ngOnInit() {
    }

    cerrarSesion() {
        console.log("cerrarSesion()");
    }

    toggleMenu() {
        this.mostrarMenu = !this.mostrarMenu
    }

}
