import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLog, UsuarioReg } from 'src/app/modelos/Usuario';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'gdp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup; 
  // form = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(private _location: Location,private _router: Router, private usuario: UserService, formBuilder: FormBuilder) {
    this.formReg = formBuilder.group({
      name:[''],
      email: ['', Validators.required],
      password: ['', Validators.required]
      
  });
  }

  ngOnInit(): void {}

  onSubmit() {
      if (this.formReg.valid) {
      // console.log('formReg',this.formReg.value);
      //   const usuarioLog: Usuario = {
      //   name:this.formReg.value.name,
      //   email:this.formReg.value.email,
      //   password: this.formReg.value.password,
      //   role: this.formReg.value.role
      // } 
      // this.subRe =
        // this.usuario.addUser(usuarioLog).subscribe((u) => {
        // const token = u.body!.response;
        // console.log('token', token);
        // sessionStorage.setItem('token', token);
    // }
    //   , err => { console.log('Error en el login'); })
      // aca guardaria los datos en la bd
      // this.usuario.addUser(this.form.value).subscribe((result) => {
      //   console.log('hola', result);
      // });
      // this._router.navigate(['/login']);
    } else {
      alert('Inserte elementos validos');
    }
  }
  backClicked() {
      this._location.back();
    }




  register() {
    if (this.formReg.valid) {
      const usuarioReg: UsuarioReg = {
        name: this.formReg.value.name,
        email: this.formReg.value.email,
        password: this.formReg.value.password,
        role: 1
    }
      this.usuario.register(usuarioReg).subscribe((u) => {
        // console.log('usuario', u);
        this.usuario.setToken(u.token);
      })
      this._location.back();
    }
    else {
      alert('uno o mas campos son incorrectos');
    }
  }
}
