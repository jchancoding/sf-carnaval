import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs;
  faq_l = [];
  faq_r = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    let obs = this._api.getFaqs()
    obs.subscribe(data => {
      // Pulls FAQ's from DB
      this.faqs = data['data'];
      this.splitFAQs();
    })

  }

  // Sorts FAQ's for better viewing
  splitFAQs(){
    for(var i=0; i<this.faqs.length; i++){
      if(i%2==0){
        this.faq_l.push(this.faqs[i]);
      } else {
        this.faq_r.push(this.faqs[i]);
      }
    }
  }

}
