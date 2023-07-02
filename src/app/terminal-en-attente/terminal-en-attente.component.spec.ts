import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalEnAttenteComponent } from './terminal-en-attente.component';

describe('TerminalEnAttenteComponent', () => {
  let component: TerminalEnAttenteComponent;
  let fixture: ComponentFixture<TerminalEnAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalEnAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
