import { Component, OnInit } from '@angular/core';
import { TPickupgame } from 'src/app/models/pickupgame';
import { PickupgamesService } from 'src/app/services/pickupgames.service';

@Component({
  selector: 'app-pickupgame',
  templateUrl: './pickupgame.component.html',
  styleUrls: ['./pickupgame.component.scss']
})
export class PickupgameComponent implements OnInit {
  zipcode: string ='';
  searchkey: string = '';

  constructor(private pickupgamesService: PickupgamesService){}

  pickUpGames: TPickupgame[] | undefined;
  ngOnInit(): void {
    this.pickupgamesService.getAvaliableGames(this.zipcode, this.searchkey).subscribe((results:any)=>
    {
      this.pickUpGames = results as TPickupgame[];
    });
  }
}
