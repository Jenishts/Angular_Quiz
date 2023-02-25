import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalresultComponent } from './finalresult/finalresult.component';
import { QuestionsComponent } from './questions/questions.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", redirectTo:'welcome', pathMatch:"full"},
  {path:"welcome", component: WelcomeComponent},
  {path:"test", component: QuestionsComponent},
  {path:"result", component: FinalresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
