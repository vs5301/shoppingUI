import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenIndianComponent } from './men-indian.component';

describe('MenIndianComponent', () => {
  let component: MenIndianComponent;
  let fixture: ComponentFixture<MenIndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenIndianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
