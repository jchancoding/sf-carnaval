import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getSponsors().subscribe(response => {
      this.sponsors = response['data'];
      
    })
  }


}
