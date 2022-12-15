import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modelos/Response';
import { UsuarioLog, UsuarioReg } from 'src/app/modelos/Usuario';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/auth';
  datoUsuario:any;
  constructor(private http: HttpClient, private cookies:CookieService) { }

  getUsers() {
    const ad = '/find/all';
   return this.http.get(this.url+ad);
  }


  login(user: UsuarioLog): Observable<any> {
    const ruta = `${this.url}` + '/login';
    
    return this.http.post(ruta, user);
    
  }
  register(user: UsuarioReg): Observable<any>{
    const ruta = `${this.url}`+'/register';
    return this.http.post(ruta, user);
  }

  // ngOnDestroy() {}

  getToken() {
    return this.cookies.get("token");
  }
  
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getUserNLogged() {
    // const token = this.getToken();
    // const ad = '/find/1';
    // // + `${{id }}`
    // return this.http.get(this.url + ad);
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    return this.datoUsuario.name;
  }
  getUserMail() {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    return this.datoUsuario.email;
  }
  
  //   addUser(user:UsuarioLog) {
//     const ruta = `${this.url}`+'/login';
//     return this.http.post<Response>(ruta, user, { observe: 'response' });
//     // return this.http.post(ruta, {
//     //   name: 'admin',
//     //   email: 'admin@bluna.com',
//     //   password: 'admin',
//     // }
//     // //   , {
//     // // //   Headers: this.httpHeaders,
//     // //   observe: 'response'
//     // // }
//     // );
// }


}
