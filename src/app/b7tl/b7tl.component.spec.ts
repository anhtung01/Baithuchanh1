import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B7tlComponent } from './b7tl.component';

describe('B7tlComponent', () => {
  let component: B7tlComponent;
  let fixture: ComponentFixture<B7tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B7tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B7tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
