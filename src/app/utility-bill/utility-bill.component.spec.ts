import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityBillComponent } from './utility-bill.component';

describe('UtilityBillComponent', () => {
  let component: UtilityBillComponent;
  let fixture: ComponentFixture<UtilityBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
