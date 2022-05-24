/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DailysComponent } from './Dailys.component';

describe('DailysComponent', () => {
  let component: DailysComponent;
  let fixture: ComponentFixture<DailysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
