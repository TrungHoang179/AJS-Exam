import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HomeComponent} from "./KidZone/home.component";
import {AboutComponent} from "./KidZone/about.component";
import {GalleryComponent} from "./KidZone/gallery.component";
import {PartyComponent} from "./KidZone/party.component";
import {OfferComponent} from "./KidZone/offer.component";
import {ContactComponent} from "./KidZone/contact.component";
import {Routes, RouterModule} from "@angular/router";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'party', component: PartyComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, GalleryComponent, PartyComponent, OfferComponent, ContactComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),  HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
