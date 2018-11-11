import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompositionPage } from './newcomposition.page';

describe('NewcompositionPage', () => {
  let component: NewcompositionPage;
  let fixture: ComponentFixture<NewcompositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompositionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
