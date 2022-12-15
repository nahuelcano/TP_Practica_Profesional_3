import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/Producto';
import { CategoriasService } from 'src/app/shared/services/categorias/categorias.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'gdp-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {
  listaCat: any;
  public categ: string = '';
  nombre: string = '';
  catego = '';
  ing: string = '';
  pre: number = 1;
  sto: number = 1;
  producto: any;
  // form: ngForm;
  toke: any;
  
  constructor(private categorias: CategoriasService, private productos: ProductoService, private _location: Location) {  }

  ngOnInit(): void {
    this.categorias.getCategorias().subscribe((cate) => {
    // console.log('categoria', cate);
    this.listaCat = cate;
    })
    // this.toke = JSON.parse(localStorage.getItem('token') || '{}');
  }
  select(categoria:string) {
    // console.log(value);
    this.categ = categoria;
  }
  onProductsCreate(prod: Producto) {
    // console.log('aver',localStorage.getItem("token"));
    const tokn = localStorage.getItem("token") || '{}';
    console.log(tokn);
    this.productos.addProduct(prod,tokn).subscribe((nuevoProd) => {
      // console.log('prodd', prod);
      // console.log('nuevoProd', nuevoProd);
      this.producto = nuevoProd;
    });
    // console.log('producto nuevo', this.producto);

    
  }
  backClicked() {
    this._location.back();
  }
}
