import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedTerminalUsersComponent } from './blocked-terminal-users.component';

describe('BlockedTerminalUsersComponent', () => {
  let component: BlockedTerminalUsersComponent;
  let fixture: ComponentFixture<BlockedTerminalUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedTerminalUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedTerminalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
