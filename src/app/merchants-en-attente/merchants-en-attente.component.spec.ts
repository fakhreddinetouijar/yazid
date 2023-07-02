import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsEnAttenteComponent } from './merchants-en-attente.component';

describe('MerchantsEnAttenteComponent', () => {
  let component: MerchantsEnAttenteComponent;
  let fixture: ComponentFixture<MerchantsEnAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantsEnAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantsEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
