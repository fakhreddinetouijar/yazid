import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalUsersComponent } from './terminal-users.component';

describe('TerminalUsersComponent', () => {
  let component: TerminalUsersComponent;
  let fixture: ComponentFixture<TerminalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
