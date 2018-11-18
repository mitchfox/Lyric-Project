import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, LoginComponent],
  exports: [ProfileComponent, LoginComponent],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
