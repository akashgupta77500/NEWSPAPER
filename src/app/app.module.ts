import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewspaperComponent } from './components/newspaper/newspaper.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { TechnologyComponent } from './components/technology/technology.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { BusinessComponent } from './components/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HeaderComponent,
    FooterComponent,
    NewspaperComponent,
    TechnologyComponent,
    EntertainmentComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
