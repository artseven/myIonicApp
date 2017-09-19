import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = ['Apples', 'Bananas', 'Berries'];
  constructor(public navCtrl: NavController) {

  }

  onClick() {
    console.log('clicked!');
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }

  onElementClick() {
    console.log('I was touched');
  }

  onElementTapped() {
    console.log('I was tapped');
  }

  onElementPressed() {
    console.log('I was pressed');
  }



}
