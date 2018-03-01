import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FoodComponent } from './food/food.component';
import { VendorsComponent } from './vendors/vendors.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FaqComponent,
    MapComponent,
    ScheduleComponent,
    FoodComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
