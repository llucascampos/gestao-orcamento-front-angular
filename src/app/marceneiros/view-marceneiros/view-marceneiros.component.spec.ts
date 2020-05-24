import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarceneirosComponent } from './view-marceneiros.component';

describe('ViewMarceneirosComponent', () => {
  let component: ViewMarceneirosComponent;
  let fixture: ComponentFixture<ViewMarceneirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMarceneirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarceneirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
