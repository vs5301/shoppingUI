import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomwearComponent } from './bottomwear.component';

describe('BottomwearComponent', () => {
  let component: BottomwearComponent;
  let fixture: ComponentFixture<BottomwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
