import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gdp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
datoUsuario:any;
  constructor() { }

  ngOnInit(): void {
    
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario')||'{}');
    // console.log('este es el usuario', this.datoUsuario);
    // console.log(this.datoUsuario.role)
  }

}
