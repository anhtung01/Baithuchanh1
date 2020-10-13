import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B4tlComponent } from './b4tl.component';

describe('B4tlComponent', () => {
  let component: B4tlComponent;
  let fixture: ComponentFixture<B4tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B4tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B4tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
