import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B6tlComponent } from './b6tl.component';

describe('B6tlComponent', () => {
  let component: B6tlComponent;
  let fixture: ComponentFixture<B6tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B6tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B6tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
