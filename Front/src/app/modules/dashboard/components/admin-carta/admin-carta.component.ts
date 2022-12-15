import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
// import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { MaterialModule } from '@gdp/shared/modules';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Producto } from 'src/app/modelos/Producto';
import { CategoriasService } from 'src/app/shared/services/categorias/categorias.service';
@Component({
  selector: 'gdp-admin-carta',
  templateUrl: './admin-carta.component.html',
  styleUrls: ['./admin-carta.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class AdminCartaComponent implements OnInit {
  #title = 'Lista de productos';
  listaProductos: any = [];
  producto: any;
  data: any;
  displayedColumns: string[] = ["id", "nombre", "ingredientes", "precio", "stock", "categoria", "Editar"];
  pageSlice: any;
  nCate: any =[];
  // @ViewChild('table') table!: MatTable<Element>;
  constructor(private productos: ProductoService, private dialog: MatDialog, private categoria:CategoriasService) { }


  ngOnInit(): void {

    this.productos.getProductos().subscribe((result) => {
      // console.warn('result', result);
      this.listaProductos = result;
      // console.log('lista', this.listaProductos);
      this.pageSlice = this.listaProductos.slice(0, 15);
      // this.table.renderRows();
    });
    // this.pageSlice = this.listaProductos.slice(0, 5);
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.listaProductos.paginator = this.pageSlice;

  }

  OnPageChange(event: PageEvent) {
    // console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = event.pageSize + startIndex;
    if (endIndex > this.listaProductos.length) {
      endIndex = this.listaProductos.length;
    }
    this.pageSlice = this.listaProductos.slice(startIndex, endIndex);
    // console.log(this.pageSlice);
  }
  // editarProducto(pro: Producto) {

  // no entiendo porque este getCategoria no trae lo que tiene que traer
  // getCategoriaI(id: string) {
  //   console.log(id);
  //   this.categoria.getCategoria(id).subscribe((c) => {
  //     this.nCate = c;
  //     console.log(c);
  //   });
  //   console.log(this.nCate);
  //   return this.nCate.name;
  // }


  borrarProd(prod: Producto) {

    this.productos.eliminar(prod.id).subscribe((borrado) => {
      // console.log(borrado);
    });
    // this.table.renderRows();

  }
}

