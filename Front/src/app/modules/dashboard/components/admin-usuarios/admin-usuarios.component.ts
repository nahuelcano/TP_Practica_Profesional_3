import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { MaterialModule } from '@gdp/shared/modules';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatTable, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'gdp-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminUsuariosComponent implements OnInit {
  #title = 'Lista de usuarios';
  listaUsuarios: any;
  data: any;
  us: any;
  displayedColumns: string[] = ["id", "name", "email", "role"];
  
  constructor(private usuarios:UserService) { }

  ngOnInit(): void {
    this.usuarios.getUsers().subscribe((result) => {
      // console.log('res', result);
      this.listaUsuarios = result;
      // console.log('lista', this.listaUsuarios);
      
    })

  }
  addUsuario() {
    //   this.userService.addUser$().subscribe({
    //     next: (res: any) => {
    //   console.log(res)
    // }})
  }


  
}