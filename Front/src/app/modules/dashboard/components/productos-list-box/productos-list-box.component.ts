import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../modelos/Producto';
@Component({
  selector: 'gdp-productos-list-box',
  templateUrl: './productos-list-box.component.html',
  styleUrls: ['./productos-list-box.component.scss']

})
export class ProductosListBoxComponent implements OnInit {
  productlist: Producto[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  
}
