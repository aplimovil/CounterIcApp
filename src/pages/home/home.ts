import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Variable to hold counter value
  public tapCounter: number = 0;
  constructor(public navCtrl: NavController) {
  }
  
  //Handles the Tap button event to increment the counter
  buttonTapped() {
    this.tapCounter++;
  }

  //Handles the Reset button event to reset the counter
  reset() {
    this.tapCounter = 0;
  }


}
