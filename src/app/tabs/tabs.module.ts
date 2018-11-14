import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

// Page Modules
import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { SettingsPageModule } from '../settings/settings.module';
import { InspirationPageModule } from '../inspiration/inspiration.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ProfilePageModule,
    HomePageModule,
    SettingsPageModule,
    InspirationPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
