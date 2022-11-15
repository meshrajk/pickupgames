import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressformsComponent } from './addressforms.component';

describe('AddressformsComponent', () => {
  let component: AddressformsComponent;
  let fixture: ComponentFixture<AddressformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
