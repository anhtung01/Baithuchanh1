import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1tlComponent } from './b1tl.component';

describe('B1tlComponent', () => {
  let component: B1tlComponent;
  let fixture: ComponentFixture<B1tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
