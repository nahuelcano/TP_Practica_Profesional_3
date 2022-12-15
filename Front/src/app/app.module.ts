import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './shared/modules/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

// Componentes de la pagina
import { NavbarComponent, EdicionComponent, CartaComponent,CarritoComponent,ContactoComponent,ProductosListBoxComponent,ProductDetailsComponent,AdminCartaComponent,AdminUsuariosComponent,CardComponent, FiltroPipe, UsuarioComponent } from './modules/dashboard/components';
import { ProductoService } from './shared/services/productos/productos.service';
import { UserService } from './shared/services/user/user.service';
import { SearchModule } from './shared/components/search/search.module';

import { MaterialModule } from './shared/modules';
// import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [ AppComponent,DashboardComponent, NavbarComponent, EdicionComponent,CartaComponent,CarritoComponent,ContactoComponent, ProductosListBoxComponent,ProductDetailsComponent,AdminCartaComponent,AdminUsuariosComponent,CardComponent, FiltroPipe, UsuarioComponent
  ],
  imports: [BrowserModule,
    AuthModule,
    MaterialModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    SearchModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtXOLNW55nnYU7jGArMYIFZSxmIhrxmKE'
    })
    ],
  providers: [ProductoService,UserService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
