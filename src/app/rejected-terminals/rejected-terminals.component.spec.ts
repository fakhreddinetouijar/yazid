import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTerminalsComponent } from './rejected-terminals.component';

describe('RejectedTerminalsComponent', () => {
  let component: RejectedTerminalsComponent;
  let fixture: ComponentFixture<RejectedTerminalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedTerminalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedTerminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
