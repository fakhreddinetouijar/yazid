import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedMerchantComponent } from './blocked-merchant.component';

describe('BlockedMerchantComponent', () => {
  let component: BlockedMerchantComponent;
  let fixture: ComponentFixture<BlockedMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
