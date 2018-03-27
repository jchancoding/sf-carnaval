import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FoodComponent } from './food/food.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { DirectionsComponent } from './directions/directions.component';
import { HomeComponent } from './home/home.component';
import { ParadeComponent } from './parade/parade.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    FaqComponent,
    MapComponent,
    ScheduleComponent,
    FoodComponent,
    VendorsComponent, 
    SponsorsComponent, 
    DirectionsComponent,
    SponsorsComponent,
    HomeComponent,
    ParadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
