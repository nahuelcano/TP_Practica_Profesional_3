import { Component } from '@angular/core';
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'gdp-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  email = new FormControl('', [Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 

}
