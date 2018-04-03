import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  vendors;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getVendors().subscribe(response => {
      this.vendors = response['data'];
      
    })
  }

}
