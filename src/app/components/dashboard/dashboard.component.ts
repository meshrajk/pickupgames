import { Component, OnInit } from '@angular/core';
import { PickupgamesService } from 'src/app/services/pickupgames.service';
import { TPickupgame } from '../../models/pickupgame';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  participatedGames: TPickupgame[] | undefined;
  avaliableGames: TPickupgame[] | undefined;

  constructor(private pickupGamesService: PickupgamesService) { }

  ngOnInit(): void {
    console.log("page is loaded")
    this.getGames();

  }
  getGames() {
    this.pickupGamesService.getParticipatedGame().subscribe(
      (res: any) => {
        console.log(res);
        this.participatedGames = res as TPickupgame[];
      });
    this.pickupGamesService.getAvaliableGames().subscribe(
      (res: any) => {
        this.avaliableGames = res.slice(0, 10) as TPickupgame[];

      });
  }
}
