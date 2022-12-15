// import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';


@Component({
  selector: 'gdp-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  Nombre: string = '';
  mail: string = '';
  constructor(private us:UserService, private ruta:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.Nombre = this.us.getUserNLogged();
      this.mail = this.us.getUserMail();
    }
    else
      this.ruta.navigate(['/login']);
  }
  getUserName() {
    // this.user.find()
    return this.Nombre;
  }
  getUserMail() {
    return this.mail;
  }
 





}
