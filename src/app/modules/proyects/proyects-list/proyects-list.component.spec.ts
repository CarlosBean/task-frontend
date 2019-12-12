import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsListComponent } from './proyects-list.component';

describe('ProyectsListComponent', () => {
  let component: ProyectsListComponent;
  let fixture: ComponentFixture<ProyectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
