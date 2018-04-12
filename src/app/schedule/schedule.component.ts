import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  events;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getEvents().subscribe(response => {
      this.events = response['data'];
      
    })
  }

}
