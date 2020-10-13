import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2tlComponent } from './b2tl.component';

describe('B2tlComponent', () => {
  let component: B2tlComponent;
  let fixture: ComponentFixture<B2tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
