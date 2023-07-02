import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReectedterminalusersComponent } from './reectedterminalusers.component';

describe('ReectedterminalusersComponent', () => {
  let component: ReectedterminalusersComponent;
  let fixture: ComponentFixture<ReectedterminalusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReectedterminalusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReectedterminalusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
