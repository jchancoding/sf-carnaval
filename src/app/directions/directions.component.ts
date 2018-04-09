import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  publicTransitDirections = [{
      header: "Via BART: 24th St",
      text: "Head north on Mission St toward 24th St. Turn right at 24th st, and main entrance is on your left at Harrison st.",
      img: "../assets/images/BART_route.png",
    },
    {
      header: "Via MUNI: 16th and Harrison",
      text: "Busses stop at both the North(Route 22, 33 & 55) and South(Route 48) end of the Venue.",
      img: "../assets/images/MUNI.png",
    },
  ];
  drivingDirections = [{
      header: "From South via 101",
      text: "From 101N take the Cesar Chavez St/ Portero St exit. Follow signs to Cesar Chavez St and Turn right at Harrison St.",
      img: "../assets/images/South_Drive.png",
    },
    {
      header: "From North via 101",
      text: "From 101S take the Harrison St Exit and continue for about 0.3 miles.",
      img: "../assets/images/North101_Drive.png",
    },
    {
      header: "From North via 80",
      text: "From 80S take the Civic Center Exit and merge onto Harrison St. Follow Harrison St for about 0.7 miles.",
      img: "../assets/images/North80_Drive.png",
    }
  ];
  constructor() {}

  ngOnInit() {}


}
