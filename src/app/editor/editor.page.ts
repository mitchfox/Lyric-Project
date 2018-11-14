import { Component, OnInit } from '@angular/core';
import { Composition, CompositionService } from '../services/composition.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})

export class EditorPage implements OnInit {

  composition: Composition = {
    compositionName: '',
    createdAt: new Date().getTime(),
    compositionDescription: '',
    compositionData: ''
  };

  compositionId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
  private compositionService: CompositionService, private loadingController: LoadingController,
  private toastController: ToastController, private keyboard: Keyboard, private actionSheetController: ActionSheetController ) { }

  // On Initial Launch
  ngOnInit() {
    this.compositionId = this.route.snapshot.params['id'];
    if (this.compositionId) {
      this.loadComposition();
    }
  }

  // Load Composition
  async loadComposition() {
    const loading = await this.loadingController.create({
      message: 'Loading Composition'
    });
    await loading.present();
    this.compositionService.getComposition(this.compositionId).subscribe(res => {
      loading.dismiss();
      this.composition = res;
    });
    // Show Keyboard
    this.keyboard.show();
  }

  // Save Composition
  async saveComposition() {
    // const loading = await this.loadingController.create({
    //   message: 'Saving Composition'
    // });
    // await loading.present();
      if (this.compositionId) {
        this.compositionService.updateComposition(this.composition, this.compositionId).then(() => {
          // loading.dismiss();
          this.nav.goBack();
        });

      } else {
        this.compositionService.addComposition(this.composition).then(() => {
          // loading.dismiss();
          this.nav.goBack();
        });
      }
    // Toast to Indicate Composition Saved, Dismissed After 3 Seconds
    const savedCompositionToast = await this.toastController.create({
      message: 'Composition Saved!',
      animated: true,
      translucent: true,
      position: 'bottom',
      duration: 2500,
    });
    savedCompositionToast.present();
  }

  // More Icon Action Sheet - Delete, Share
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        icon: 'trash',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        icon: 'share-alt',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        icon: 'lock',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
