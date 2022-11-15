import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickupgameforms',
  templateUrl: './pickupgameforms.component.html',
  styleUrls: ['./pickupgameforms.component.scss']
})
export class PickupgameformsComponent implements OnInit {

  constructor(public router: Router) { }
  error: string = '';
  form: FormGroup = new FormGroup({
    Participants: new FormControl(''),
    Game: new FormControl(''),
    DateTime: new FormControl(''),
    Address: new FormControl(''),
    game: new FormControl(''),
    password: new FormControl(''),
  });

  submit(){
  }
  ngOnInit(): void {
  }

}
