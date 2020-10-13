import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B5tlComponent } from './b5tl.component';

describe('B5tlComponent', () => {
  let component: B5tlComponent;
  let fixture: ComponentFixture<B5tlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B5tlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B5tlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
