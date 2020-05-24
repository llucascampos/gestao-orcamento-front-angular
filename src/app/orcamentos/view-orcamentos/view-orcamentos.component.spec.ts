import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrcamentosComponent } from './view-orcamentos.component';

describe('ViewOrcamentosComponent', () => {
  let component: ViewOrcamentosComponent;
  let fixture: ComponentFixture<ViewOrcamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrcamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
