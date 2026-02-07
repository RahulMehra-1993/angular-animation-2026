import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation3 } from './animation-3';

describe('Animation3', () => {
  let component: Animation3;
  let fixture: ComponentFixture<Animation3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animation3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animation3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
