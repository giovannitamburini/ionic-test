import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferFormPage } from './offer-form.page';

describe('OfferFormPage', () => {
  let component: OfferFormPage;
  let fixture: ComponentFixture<OfferFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
