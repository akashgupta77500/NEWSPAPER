import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { TechnologyComponent } from './components/technology/technology.component';
const routes: Routes = [

  {path:"", redirectTo:"all_indian_news",pathMatch:"full"},
  {path:"all_indian_news", component:LandingpageComponent},
  {path:"business_news", component:BusinessComponent},
  {path:"technology_news", component:TechnologyComponent},
  {path:"entertainment_news", component:EntertainmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
