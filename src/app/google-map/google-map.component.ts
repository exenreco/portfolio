import { Component, HostListener, ViewChild, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { NgFor } from '@angular/common';
import { Marker } from './interface';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker, NgFor],
  encapsulation: ViewEncapsulation.None,
  template: `
    <!-- GOOGLE MAPS -->
    <google-map #googleMap
      [center]="center"
      [zoom]="zoom"
      [options]="mapOptions"
      class="google-map google-map-container"
    >
      <ng-container *ngFor="let marker of markers">
        <map-advanced-marker
          [position]="marker.position"
          [title]="marker.title"
          (gmp-click)="onMarkerClick(marker, $any($event).detail)">
          <div class="custom-marker">{{ marker.label || '' }}</div>
        </map-advanced-marker>
      </ng-container>
    </google-map>
  `,
  styles: `
    :host {
      width:100%;
      height:160px;
      display:block;

      /* specific class for testing */
      .google-map-container { width: 100%; height: 100%; }
    }
    .google-map, google-map { width: 100%; height: 100%; display: block; position: relative; }
    .google-map map-advanced-marker, google-map map-advanced-marker {
      color: white;
      display: none;
      font-weight: 500;
      padding: 8px 12px;
      border-radius: 4px;
      visibility: hidden;
      border: 2px solid white;
      background-color: #4285f4;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    app-google-map google-map .gm-control-active {
      padding: 8px !important;
      background-color: white !important;
    }
  `
})
export class GoogleMapComponent implements AfterViewInit {
  @ViewChild('googleMap') map!: GoogleMap;  // picks up real or mock

  @Input() center: google.maps.LatLngLiteral = { lat: 41.2565, lng: -95.9345 };
  @Input() zoom = 10;
  @Input() markers: Marker[] = [];

  @HostListener('window:initMapError')
  onMapError() {
    console.error('Failed to load Google Maps API');
  }

  mapOptions: google.maps.MapOptions = {
    mapId: '5e590b20b21b172c86905bb2',
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: true,
  };

  ngAfterViewInit() {
    // Access map instance after view init
    // console.log(this.map.googleMap);
  }

  onMarkerClick(marker: Marker, mapMouseEvent: google.maps.MapMouseEvent) {
    if (!mapMouseEvent.latLng) {
      console.warn('Click did not include a latLng');
      return;
    }
    console.log('Marker clicked:', marker);
    console.log('Coordinates:', mapMouseEvent.latLng.toJSON());
    console.log('DOM Event:', mapMouseEvent.domEvent);
  }
}
