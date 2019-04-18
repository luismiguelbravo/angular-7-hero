import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDeBusquedaComponent } from './panel-de-busqueda.component';

describe('PanelDeBusquedaComponent', () => {
  let component: PanelDeBusquedaComponent;
  let fixture: ComponentFixture<PanelDeBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDeBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDeBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
