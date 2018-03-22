import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // Our map! :)
  private map: mapboxgl.Map;

  loading = true;

  // Component attributes
  // Map theme
  @Input() style = 'mapbox://styles/mapbox/streets-v8';

  // Ask for location and fly to it
  @Input() geolocation = false;

  @Input() center: [Number, Number] = [-122.412660, 37.758790];

  @Input() sw: [Number, Number] = [-122.430670, 37.736913];

  @Input() ne: [Number, Number] = [-122.400200, 37.773207];

  constructor() {
    // Setup mapbox public key
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    // Ask for location.
    if (this.geolocation && navigator.geolocation) {
      // Get coordinates
      navigator.geolocation.getCurrentPosition(position => {
        // 🛩
        this.map.flyTo({
          center: [position.coords.longitude, position.coords.latitude]
        });
      });
    }
    this.buildMap();
  }

  private buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1,
      center: this.center,
      maxBounds: [this.sw, this.ne]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Toggle loading symbol
    this.map.on('load', (event) => {
      this.loading = false;
      
      // Add line for parade
      this.map.addLayer({
        "id": "parade",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.411904, 37.752642],
                [-122.418434, 37.752236],
                [-122.419868, 37.766687],
                [-122.413295, 37.767095]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(0, 148, 50, 0.5)",
          "line-width": 8
        }
      });

      // Add line for Festival
      this.map.addLayer({
        "id": "festival",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.411904, 37.752642],
                [-122.413192, 37.765445]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(6, 82, 221, 0.5)",
          "line-width": 8
        }
      });

      // Add line for Destaging Area
      this.map.addLayer({
        "id": "destage",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.413295, 37.767095],
                [-122.413192, 37.765445],
                [-122.412564, 37.766856]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(255, 196, 18, 0.5)",
          "line-width": 8
        }
      });

      // Add line for Staging Area
      this.map.addLayer({
        "id": "stage1",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.410384, 37.764326],
                [-122.408748, 37.748486],  
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(237, 76, 103, 0.5)",
          "line-width": 8
        }
      });
      this.map.addLayer({
        "id": "stage2",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-122.408216, 37.752867], 
                [-122.411904, 37.752642]
              ]
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "rgba(237, 76, 103, 0.5)",
          "line-width": 8
        }
      });
      
      this.map.addLayer({
        "id": "testpoly",
        "type": "fill",
        "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                          [-122.419667, 37.765068], //16xValencia NW
                          [-122.417572, 37.765195], //16xVan Ness NE
                          [-122.417384, 37.763588], //SW
                          [-122.419532, 37.763456]  //SE
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                      [
                        [-122.419512, 37.763431],
                        [-122.417452, 37.763511],
                        [-122.417237, 37.762051],
                        [-122.419297, 37.761948]
                      ]
                    ]
                }
            }] //end of features
        },
      }, //end of source
      "paint": {
        "fill-color": "#888888",
        "fill-opacity": 0.8
      }
      }); //end of layer

      //venue layers from below this point
      this.map.addLayer({ //entrances layer
        "id": "entrances",
        "type": "fill",
        "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                          [-122.4131930, 37.7650498], //Harrison & Treat
                          [-122.4131837, 37.7649846],
                          [-122.4129791, 37.7649984],
                          [-122.4129872, 37.7650641],
                          [-122.4131930, 37.7650498]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                      [
                        [-122.4139705, 37.7622690], //Treat St & 18th
                        [-122.4139381, 37.7620600],
                        [-122.4138335, 37.7620663],
                        [-122.4138684, 37.7622741],
                        [-122.4139705, 37.7622690]
                      ]
                    ]
                }
            }, {
              "type": "Feature",
              "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [-122.4135731, 37.7588767], //20th & Treat Ave
                      [-122.4134746, 37.7588810],
                      [-122.4134900, 37.7590590],
                      [-122.4135932, 37.7590527],
                      [-122.4135731, 37.7588767]
                    ]
                  ]
              }
          }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [-122.4131338, 37.7542714], //23rd & Treat Ave
                    [-122.4131043, 37.7540678],
                    [-122.4130011, 37.7540728],
                    [-122.4130315, 37.7542760],
                    [-122.4131338, 37.7542714]
                  ]
                ]
            }
        }, {
          "type": "Feature",
          "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [-122.4120851, 37.7528054], //Harrison & 24th
                  [-122.4120702, 37.7527093],
                  [-122.4117501, 37.7527300],
                  [-122.4117642, 37.7528253],
                  [-122.4120851, 37.7528054]
                ]
              ]
          }
      }] //end of features
        },
      }, //end of source
      "paint": {
        "fill-color": "#EA2027",
        "fill-opacity": 0.8
      }
      }); //end of entrances layer

      this.map.addLayer({
        "id": "exhibits",
        "type": "fill",
        "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                          //marposa & 18th exhibit
                          [-122.41296, 37.76278],
                          [-122.41281, 37.76279],
                          [-122.41277, 37.76232],
                          [-122.41291, 37.76231]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                      [
                        //18th & harrison sponsor
                        [-122.41291 , 37.76231],
                        [-122.41277 , 37.76232],
                        [-122.41276 , 37.76225],
                        [-122.41290 , 37.76224]
                      ]
                    ]
                }
            }, {
              "type": "Feature",
              "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      //mariposa & harrison sponsor
                      [-122.41297, 37.76286], 
                      [-122.41282, 37.76287],
                      [-122.41281, 37.76279],
                      [-122.41296, 37.76278]
                    ]
                  ]
              }
          }] //end of features
        },
      }, //end of source
      "paint": {
        "fill-color": "#1289A7",
        "fill-opacity": 0.8
      }
      }); //end of entrances layer
    });
  }
}
