import { Component, OnInit } from '@angular/core';
import { UsuarioLog } from 'src/app/modelos/Usuario';
// import { AuthGuard } from '@gdp/shared/guards';
// import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'gdp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  datoUsuario: any;
  rol: number = 0;
  
  constructor(  ) { }

  ngOnInit(): void {
   
    let element = document.getElementById("boton-admin");
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario')||'{}');
    // console.log(this.datoUsuario);
    this.rol = this.datoUsuario.role;
    // console.log('rol:', this.rol);
    if (this.rol === 3)
      element?.removeAttribute("hidden");
    else
      element?.setAttribute('hidden', 'hidden');  
  }


  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }
  // ver como poner si no se inicio sesion que no aparezca el boton de usuario
}
