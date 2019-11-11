import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComentarioPage } from './crud-comentario.page';

describe('CrudComentarioPage', () => {
  let component: CrudComentarioPage;
  let fixture: ComponentFixture<CrudComentarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudComentarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
