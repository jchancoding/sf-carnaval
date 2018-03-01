import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { MapComponent } from './map/map.component';
import { FoodComponent } from './food/food.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  { path:  'faq', component: FaqComponent},
  { path: 'map', component: MapComponent}, 
  { path: 'food', component: FoodComponent}, 
  { path: 'schedule', component: ScheduleComponent}, 
  { path: 'vendors', component: VendorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
