import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerminalUserComponent } from './add-terminal-user.component';

describe('AddTerminalUserComponent', () => {
  let component: AddTerminalUserComponent;
  let fixture: ComponentFixture<AddTerminalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTerminalUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTerminalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
