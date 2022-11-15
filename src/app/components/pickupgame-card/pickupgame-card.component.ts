import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TPickupgame } from 'src/app/models/pickupgame';
import { MailingService } from 'src/app/services/mailjet/mailing.service';
import { PickupgamesService } from 'src/app/services/pickupgames.service';


@Component({
  selector: 'app-pickupgame-card',
  templateUrl: './pickupgame-card.component.html',
  styleUrls: ['./pickupgame-card.component.scss']
})
export class PickupgameCardComponent implements OnInit {

  @Input()
  pickupGame: TPickupgame | undefined;

  @Input()
  myGame: boolean | false | undefined;

  @Output()
  updated: EventEmitter<any> = new EventEmitter();

  constructor(private mailingService: MailingService, private pickupGamesService: PickupgamesService) { }


  shared(){
    console.log("shared");
    this.mailingService.sendTestEmail();
  }
  participated(){
    this.pickupGamesService.addParticipatedGame({ pickupGame: this.pickupGame }).subscribe((res:boolean)=> res && this.updated.emit());
  }
  withdraw(){
    this.pickupGamesService.withdraw(this.pickupGame).subscribe((res:boolean)=> res && this.updated.emit());
  }
  ngOnInit(): void {
  }

}
