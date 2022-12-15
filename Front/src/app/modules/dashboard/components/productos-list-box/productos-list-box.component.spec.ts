import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosListBoxComponent } from './productos-list-box.component';
import { Producto } from '../../../../modelos/Producto';

describe('ProductosListBoxComponent', () => {
  let component: ProductosListBoxComponent;
  let fixture: ComponentFixture<ProductosListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosListBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
