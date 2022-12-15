import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
import { MatDialogRef } from '@angular/material/dialog'; 
@Component({
  selector: 'gdp-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service:ProductoService, public dialogRef:MatDialogRef<ProductoComponent>) { }

  ngOnInit(): void {
    this.service.getProductos();
  }
  onClear() {
    this.service.formP.reset();
  }

}
