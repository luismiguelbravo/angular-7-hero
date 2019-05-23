import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaPrepagoComponent } from './bolsa-prepago.component';

describe('BolsaPrepagoComponent', () => {
  let component: BolsaPrepagoComponent;
  let fixture: ComponentFixture<BolsaPrepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaPrepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaPrepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
