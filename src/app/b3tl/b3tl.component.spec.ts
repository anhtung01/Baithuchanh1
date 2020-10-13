import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B3tlComponent } from './b3tl.component';

describe('B3tlComponent', () => {
  let component: B3tlComponent;
  let fixture: ComponentFixture<B3tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B3tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B3tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
