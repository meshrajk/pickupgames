import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupgameComponent } from './pickupgame.component';

describe('PickupgameComponent', () => {
  let component: PickupgameComponent;
  let fixture: ComponentFixture<PickupgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
