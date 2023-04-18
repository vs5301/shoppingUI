import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopwearComponent } from './topwear.component';

describe('TopwearComponent', () => {
  let component: TopwearComponent;
  let fixture: ComponentFixture<TopwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
