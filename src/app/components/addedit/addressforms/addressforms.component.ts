import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addressforms',
  templateUrl: './addressforms.component.html',
  styleUrls: ['./addressforms.component.scss']
})
export class AddressformsComponent implements OnInit {

  constructor(public controlContainer: ControlContainer) { }
  error: string = '';
  addressForm: FormGroup = new FormGroup({
    StreetAddress: new FormControl(''),
    Address1: new FormControl(''),
    City: new FormControl(''),
    State: new FormControl(''),
    Zipcode: new FormControl('')
  });
  ngOnInit(): void {
  }

}
