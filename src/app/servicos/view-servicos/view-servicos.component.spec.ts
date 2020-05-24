import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServicosComponent } from './view-servicos.component';

describe('ViewServicosComponent', () => {
  let component: ViewServicosComponent;
  let fixture: ComponentFixture<ViewServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
