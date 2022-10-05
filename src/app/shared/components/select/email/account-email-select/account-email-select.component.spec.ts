import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEmailSelectComponent } from './account-email-select.component';

describe('AccountEmailSelectComponent', () => {
  let component: AccountEmailSelectComponent;
  let fixture: ComponentFixture<AccountEmailSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEmailSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountEmailSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
