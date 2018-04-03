import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foods;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getFoods().subscribe(response => {
      this.foods = response['data'];
      
    })
  }

}
