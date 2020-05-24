import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMateriaisComponent } from './view-materiais.component';

describe('MateriaisComponent', () => {
  let component: ViewMateriaisComponent;
  let fixture: ComponentFixture<ViewMateriaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMateriaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
