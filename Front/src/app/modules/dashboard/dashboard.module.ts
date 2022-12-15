import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';
import { MatTabsModule } from '@angular/material/tabs';
import { CarritoComponent, CartaComponent, ContactoComponent, EdicionComponent,ProductosListBoxComponent, InfoComponent,AdminCartaComponent,AdminUsuariosComponent,CardComponent } from '@gdp/dashboard/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FiltroPipe } from '@gdp/dashboard/components';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ProductoComponent } from './components/producto/producto.component';


const components = [CarritoComponent,CartaComponent,ContactoComponent,EdicionComponent,ProductosListBoxComponent, InfoComponent, AdminCartaComponent, AdminUsuariosComponent, CardComponent,UsuarioComponent];

@NgModule({
  declarations: [DashboardComponent, ...components, ProductDetailsComponent, UsuarioComponent, CardComponent, ProductoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    SearchModule,
    MatOptionModule,
    FormsModule
    
  ], 
})
export class DashboardModule {}
