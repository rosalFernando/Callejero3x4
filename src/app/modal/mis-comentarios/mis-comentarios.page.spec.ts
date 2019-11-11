import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisComentariosPage } from './mis-comentarios.page';

describe('MisComentariosPage', () => {
  let component: MisComentariosPage;
  let fixture: ComponentFixture<MisComentariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisComentariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisComentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
