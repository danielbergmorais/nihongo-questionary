import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QuestionaryPage } from './questionary.page';

import { QuestionaryPageRoutingModule } from './questionary-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionaryPageRoutingModule
  ],
  declarations: [QuestionaryPage]
})
export class QuestionaryPageModule {}
