import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { MatSelectModule } from '@angular/material/select'; 
import { MatOptionModule } from '@angular/material/core';
import { CategoriasService } from 'src/app/shared/services/categorias/categorias.service';
import { FormControl, Validators } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';
@Component({
  selector: 'gdp-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartaComponent implements OnInit {
  listaProductos: any;
  listaProductosF: any;
  // data: any;
  public page: number = 0;
  public search: string = '';
  public categ: string = '';
  catego = '';
  listaCat: any;
 
  constructor(private productos:ProductoService, private categorias:CategoriasService) { }

ngOnInit(): void { 
  this.productos.getProductos().subscribe((result) => {
    // console.log('result', result);
    this.listaProductos = result;
    this.listaProductosF = this.listaProductos;
  })
  this.categorias.getCategorias().subscribe((cate) => {
    // console.log('categoria', cate);
    this.listaCat = cate;
  })
}
  onSearch(value: string) {
    // console.log(value);
    this.page = 0;
    this.search = value;
    this.listaProductosF= new FiltroPipe().transform(this.listaProductos, this.page, this.search, this.categ);
  }
  
  select(value:string) {
    // console.log(value);
    this.page = 0;
    this.categ = value;
    // console.log('dale', this.categ);
    this.listaProductosF= new FiltroPipe().transform(this.listaProductos, this.page, this.search, this.categ);
  }
 
  handleClear() {
    this.categ = '';
    this.search = '';
    this.listaProductosF = this.listaProductos;
    this.catego = '';
  }


}
