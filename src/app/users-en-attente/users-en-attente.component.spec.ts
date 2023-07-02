import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEnAttenteComponent } from './users-en-attente.component';

describe('UsersEnAttenteComponent', () => {
  let component: UsersEnAttenteComponent;
  let fixture: ComponentFixture<UsersEnAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEnAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
