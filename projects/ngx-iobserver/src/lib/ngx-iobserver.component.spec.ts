import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIobserverComponent } from './ngx-iobserver.component';

describe('NgxIobserverComponent', () => {
  let component: NgxIobserverComponent;
  let fixture: ComponentFixture<NgxIobserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIobserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIobserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
