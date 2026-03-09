import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionaryPage } from './questionary.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionaryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionaryPageRoutingModule {}
