import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getFaqs().subscribe(response => {
      this.faqs = response['data'];
      
    })
  }

}
