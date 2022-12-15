import { Component, OnInit,Input } from '@angular/core';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';

@Component({
  selector: 'gdp-card',
  template: ``,
  styles: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() prod: any;
  public icono: string = '';
  listaIcon: string[]=[];
  constructor(private producto: ProductoService) {
    this.icono = "favorite_border";
    this.listaIcon = ["favorite_border","favorite"];
   }

  ngOnInit(): void {
    // '{{item.id}}'
  //   this.producto.getProducto('').subscribe((product) => {
  //     console.warn('result', product);
  //     this.prod = product;
  // })
    
  }
  select(value: string) {
    this.icono = value;
  }
  //ojala esto hubiera andado pero no
  // selectI(icon: any) {
  //   // icon.classList.toggle("favorite");
  //   console.log(this.icono);
  //   if (icon == "favorite_border")
  //     this.icono = "favorite";
  //   else
  //     this.icono = "favorite_border";
  // }
}
