import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionPageRoutingModule } from './login-routing.module';

import { InscriptionPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionPageRoutingModule
  ],
  declarations: [InscriptionPage]
})
export class InscriptionPageModule {}
