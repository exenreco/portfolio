import { Component, HostListener, ViewChild,AfterViewInit, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { NgFor, NgIf } from '@angular/common';
import { Marker } from './interface';
import { Loader } from '@googlemaps/js-api-loader';
import { EnvGoogleMapsAPIKey } from '../env/maps.env';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker, NgFor, NgIf],
  encapsulation: ViewEncapsulation.None,
  template: `
    <!-- Only render the map once google.maps is available -->
    <ng-container *ngIf="mapLoaded; else loading">
      <google-map #googleMap
        [center]="center"
        [zoom]="zoom"
        [options]="mapOptions"
        class="google-map-container">
        <ng-container *ngFor="let m of markers">
          <map-advanced-marker
            [position]="m.position"
            [title]="m.title"
            (gmp-click)="onMarkerClick(m, $any($event).detail)">
            <div class="custom-marker">{{ m.label || '' }}</div>
          </map-advanced-marker>
        </ng-container>
      </google-map>
    </ng-container>
    <ng-template #loading><p>Loading map…</p></ng-template>
  `,
  styles: [`
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
  `]
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('googleMap') map!: GoogleMap;
  @Input() center: google.maps.LatLngLiteral = { lat: 41.2565, lng: -95.9345 };
  @Input() zoom = 10;
  @Input() markers: Marker[] = [];

  mapLoaded = false;

  mapOptions: google.maps.MapOptions = {
    mapId: '5e590b20b21b172c86905bb2',
    zoomControl: true,
    scrollwheel: true,
    disableDefaultUI: true
  };

  async ngOnInit() {
    try {
      await this.loadGoogleMaps();
      this.mapLoaded = true;
    } catch (e) {
      console.error('Google Maps failed to load:', e);
    }
  }

  private async loadGoogleMaps() {
    // configure the loader
    const
      loader = new Loader({
        apiKey: EnvGoogleMapsAPIKey.ApiKey,
        version: 'weekly',       // or 'beta' when v4 features needed
        libraries: ['places'],
      }),

      // build URL and append loading=async
      base = (loader as any).createUrl?.() || `https://maps.googleapis.com/maps/api/js`,
      url  = `${base}&loading=async`
    ;

    await new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src   = url;
      script.async = true;
      script.defer = true;
      script.onload  = () => resolve();
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });

    // actually injects the <script> and resolves when global `google` is ready
    await loader.importLibrary("core");
  }

  onMarkerClick(marker: Marker, event: google.maps.MapMouseEvent) {
    console.log('Clicked', marker, event.latLng?.toJSON());
  }

  @HostListener('window:initMapError')
  onMapError() {
    console.error('Failed to load Google Maps API');
  }
}
