import { ActionSheetController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'action-sheet',
  templateUrl: './action-sheet.html'
})
export class ActionSheet {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
