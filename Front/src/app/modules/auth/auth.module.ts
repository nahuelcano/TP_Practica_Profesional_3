import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { LoginComponent, RegisterComponent } from '@gdp/auth/views';

import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';

const views = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [AuthComponent, ...views],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule,
    HttpClientModule
  ],
})
export class AuthModule {}
