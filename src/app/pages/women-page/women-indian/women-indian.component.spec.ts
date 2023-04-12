import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenIndianComponent } from './women-indian.component';

describe('WomenIndianComponent', () => {
  let component: WomenIndianComponent;
  let fixture: ComponentFixture<WomenIndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenIndianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
