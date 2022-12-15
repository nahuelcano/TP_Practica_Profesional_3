import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
import { Location } from '@angular/common';
// import { Producto } from '../../../../Producto';
// import { ProductosListBoxComponent } from '../productos-list-box/productos-list-box.component';
@Component({
  selector: 'gdp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prod: any;
  id:any;
  constructor(private productos: ProductoService, private activatedRoute: ActivatedRoute, private _location: Location) { 
    this.activatedRoute.params.subscribe(result => {
      this.id = result['id'];
      // console.log('id:',result);
      
    });
  }
  

  ngOnInit(): void {
    this.productos.getProducto(this.id).subscribe((producto) => {
      // console.warn('result', producto);
      this.prod = producto;
      
      
    })
  }
  volver() {
   this._location.back();
  }
  

}
