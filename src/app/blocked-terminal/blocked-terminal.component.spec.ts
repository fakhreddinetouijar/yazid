import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedTerminalComponent } from './blocked-terminal.component';

describe('BlockedTerminalComponent', () => {
  let component: BlockedTerminalComponent;
  let fixture: ComponentFixture<BlockedTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
