import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { ParadeComponent } from './parade/parade.component';
import { FoodComponent } from './food/food.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DirectionsComponent } from './directions/directions.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'map', component: MapComponent},
  { path: 'parade', component: ParadeComponent},
  { path: 'food', component: FoodComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'vendors', component: VendorsComponent}, 
  { path: 'directions', component: DirectionsComponent}, 
  { path: 'sponsors', component: SponsorsComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
