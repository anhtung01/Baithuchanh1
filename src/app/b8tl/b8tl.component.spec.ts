import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B8tlComponent } from './b8tl.component';

describe('B8tlComponent', () => {
  let component: B8tlComponent;
  let fixture: ComponentFixture<B8tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B8tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B8tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
