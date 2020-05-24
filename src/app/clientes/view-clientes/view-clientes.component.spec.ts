import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientesComponent } from './view-clientes.component';

describe('ViewClientesComponent', () => {
  let component: ViewClientesComponent;
  let fixture: ComponentFixture<ViewClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
