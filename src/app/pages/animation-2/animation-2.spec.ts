import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation2 } from './animation-2';

describe('Animation2', () => {
  let component: Animation2;
  let fixture: ComponentFixture<Animation2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animation2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animation2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
