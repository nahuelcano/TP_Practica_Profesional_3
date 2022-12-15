import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@gdp/shared/modules';
import { AdminCartaComponent } from './admin-carta.component';

describe('AdminCartaComponent', () => {
  let component: AdminCartaComponent;
  let fixture: ComponentFixture<AdminCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
