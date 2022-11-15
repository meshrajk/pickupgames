import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gameforms',
  templateUrl: './gameforms.component.html',
  styleUrls: ['./gameforms.component.scss']
})
export class GameformsComponent implements OnInit {

  constructor() { }
  error: string = '';
  gameForm: FormGroup = new FormGroup({
    Participants: new FormControl(''),
    Game: new FormControl(''),
    DateTime: new FormControl(''),
    Address: new FormControl(''),
    game: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
  }
}
