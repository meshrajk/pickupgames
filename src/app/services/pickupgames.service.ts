import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { TAddress } from '../models/address';
import { TGames } from '../models/games';
import { TPickupgame } from '../models/pickupgame';
import addressess from '../stub/address.json';
import games from '../stub/games.json';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PickupgamesService {
  withdraw(pickupGame?: TPickupgame, userId?: string) {
    userId = this._getUserId(userId);
    let savedData = JSON.parse(localStorage.getItem(userId!) || '{}');
    let index = savedData?.participatedGames?.findIndex((x:TPickupgame) => x.OOID == pickupGame?.OOID);
    savedData?.participatedGames?.splice(index, 1);
    localStorage.setItem(userId, JSON.stringify(savedData));
    return of(true);
  }
  
  addParticipatedGame({ pickupGame, userId }: { pickupGame: TPickupgame | undefined; userId?: string; }) {
    userId = this._getUserId(userId);
    let savedData = JSON.parse(localStorage.getItem(userId!) || '{}');
    let alreadyPartipated = savedData?.participatedGames?.find((x:TPickupgame) => x.OOID == pickupGame?.OOID);
    if (alreadyPartipated){
      return of(false);
    }

    savedData.participatedGames = [...savedData?.participatedGames || [], pickupGame];
    localStorage.setItem(userId, JSON.stringify(savedData));
    return of(true);
  }

  getParticipatedGame(userId?: string){
    userId = this._getUserId(userId);
    let savedData = JSON.parse(localStorage.getItem(userId!) || '{}');
    return of(savedData?.participatedGames);
  }

  getAvaliableGames(zipcode?: string, searchkey?: string) {
    console.log("TODO: use zipcode and search key to find the game", zipcode, searchkey);
    return of(getMockedUpPickupGames())
  }

  addPickUpGame({ pickupGame, userId }: { pickupGame: TPickupgame | undefined; userId?: string; }) {
    userId = this._getUserId(userId);
    let savedData = JSON.parse(localStorage.getItem(userId!) || '');
    savedData.avaliableGames = [...savedData?.participatedGames || [], pickupGame];
    localStorage.setItem(userId, JSON.stringify(savedData));
  }
  constructor(private userService: UserService) { }

  private _getUserId(userId: string | undefined) {
    userId = userId || this.userService.CurrentUser?.email || "userid";
    return userId;
  }
}

function getMockedUpPickupGames(numberOfGames?: number) {
  let random = numberOfGames || Math.round(Math.random() * 100);
  let sliceOfGames = games.games.splice(random);
  return sliceOfGames.map((game:any)=> {
    let address = addressess.addresses[Math.round(Math.random() * 100)];
    let date = randomDate()
    let name = `${game.Name} on ${date.toLocaleDateString('en-US')} in ${address.City} ${address.State}`;
    return {
      Participants: [],
      Game: game,
      DateTime: date,
      Address: address as TAddress,
      Name: name,
      OOID: name.replace(/\W/g, '')
    };
  });
}

function randomDate(){
  let start = new Date();
  let end = new Date()
  end.setDate(end.getDate() + 45);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}