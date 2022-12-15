import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/modelos/Producto';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modelos/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductoService implements OnInit {
  url = 'http://localhost:3000/productos/';
  formP: FormGroup = new FormGroup({
    // $id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    ingredientes: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    id_categoria: new FormControl(''),
  });
  tokk = localStorage.getItem("token") || '{}';
  httpOption = {
    headers: new HttpHeaders({
      "Authorization": "Token " + this.tokk
    })
  };
  constructor(private http: HttpClient) { }
   


  getProductos() {
    return this.http.get(this.url)
      // .pipe(map(resp=>[])   )
  }
  getProducto(id:string) {
    return this.http.get(this.url+id);
  }
  addProduct(prod:Producto, token:string) {
    // return this.http.post(this.url);
    
    // const tokn = JSON.parse(sessionStorage.getItem('token') || '{}');
    // console.log('entras',tokn);
    return this.http.post(this.url, prod,this.httpOption);
    
  }
  initializeFormGroup() {
    this.formP.setValue({
      // $key: null,
      name: '',
      ingredientes: '',
      precio: '',
      stock: '',
      id_categoria: '1',
    });
  }

  // updateProd(prod: Producto) {
    
    
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  eliminar(id: number) {
    //confirm de borrar
    return this.http.delete(this.url + id, this.httpOption);
  }
}
