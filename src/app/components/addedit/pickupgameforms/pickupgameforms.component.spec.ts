import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupgameformsComponent } from './pickupgameforms.component';

describe('PickupgameformsComponent', () => {
  let component: PickupgameformsComponent;
  let fixture: ComponentFixture<PickupgameformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupgameformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupgameformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
