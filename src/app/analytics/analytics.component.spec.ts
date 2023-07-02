import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANALYTICSComponent } from './analytics.component';

describe('ANALYTICSComponent', () => {
  let component: ANALYTICSComponent;
  let fixture: ComponentFixture<ANALYTICSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANALYTICSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ANALYTICSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
