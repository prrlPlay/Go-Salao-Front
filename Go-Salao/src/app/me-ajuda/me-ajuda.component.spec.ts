/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeAjudaComponent } from './me-ajuda.component';

describe('MeAjudaComponent', () => {
  let component: MeAjudaComponent;
  let fixture: ComponentFixture<MeAjudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeAjudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
