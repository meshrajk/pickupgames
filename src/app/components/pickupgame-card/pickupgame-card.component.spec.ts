import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupgameCardComponent } from './pickupgame-card.component';

describe('PickupgameCardComponent', () => {
  let component: PickupgameCardComponent;
  let fixture: ComponentFixture<PickupgameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupgameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupgameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
