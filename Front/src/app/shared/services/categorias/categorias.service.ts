import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

  url = 'http://localhost:3000/categorias/';
  constructor(private http: HttpClient) { }
  getCategorias() {
    return this.http.get(this.url);
  }
  getCategoria(id: string) {
    return this.http.get(this.url + id);
  }
  // getCategoriasFiltro(filtro: string) {
  //   this.
  // }
  // getNCategoria(id:string) {
  //   return this.http.get(this.url + id);
  // }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
