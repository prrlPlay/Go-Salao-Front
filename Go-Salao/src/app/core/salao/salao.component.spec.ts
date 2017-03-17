/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalaoComponent } from './salao.component';

describe('SalaoComponent', () => {
  let component: SalaoComponent;
  let fixture: ComponentFixture<SalaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
