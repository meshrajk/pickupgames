import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TPickupgame } from '../models/pickupgame';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  isTestEnv: boolean;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.isTestEnv = !environment.production;
    this.baseUrl = environment.baseUrl;
  }
}
