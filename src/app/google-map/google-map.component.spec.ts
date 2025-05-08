import { CUSTOM_ELEMENTS_SCHEMA, Component, Directive, Input, Output, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GoogleMapComponent } from './google-map.component';
import { NgFor } from '@angular/common';

// Mock Google Maps components
@Component({
  selector: 'google-map',
  template: '<ng-content></ng-content>',
  standalone: true
})
class MockGoogleMapComponent {
  @Input() center!: google.maps.LatLngLiteral;
  @Input() zoom!: number;
  @Input() options!: google.maps.MapOptions;

  googleMap = {
    setCenter: jasmine.createSpy('setCenter'),
    setZoom: jasmine.createSpy('setZoom')
  };
}

@Component({
  selector: 'map-advanced-marker',
  template: '<ng-content></ng-content>',
  standalone: true
})
class MockAdvancedMarkerComponent {
  @Input() position!: google.maps.LatLngLiteral;
  @Input() title!: string;
}

describe('Google Maps Component', () => {
  let component: GoogleMapComponent;
  let fixture: ComponentFixture<GoogleMapComponent>;

  beforeEach(async () => {
    // Mock Google Maps API globally
    (window as any).google = {
      maps: {
        Map: class {
          setCenter = jasmine.createSpy('setCenter');
          setZoom = jasmine.createSpy('setZoom');
        }
      }
    } as unknown as typeof google.maps;

    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(GoogleMapComponent, {
      set: {
        imports: [
          MockGoogleMapComponent,
          MockAdvancedMarkerComponent,
          NgFor
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;

    component.center = { lat: 41.2565, lng: -95.9345 };
    component.zoom = 10;
    component.markers = [];
    fixture.detectChanges();
  });

  afterEach(() => {
    delete (window as any).google;
  });

  it('└── Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('└── Should initialize map view child', () => {
    expect(component.map).toBeTruthy();
  });

  it('└── Should accept and use center input', () => {
    const testCenter = { lat: 40.7128, lng: -74.0060 };
    component.center = testCenter;
    fixture.detectChanges();

    const mapEl = fixture.debugElement.query(By.directive(MockGoogleMapComponent));
    expect(mapEl.componentInstance.center).toEqual(testCenter);
  });

  it('└── Should display correct number of markers', () => {
    component.markers = [
      { position: { lat: 40.7128, lng: -74.0060 }, title: 'NY', label: 'NY' },
      { position: { lat: 34.0522, lng: -118.2437 }, title: 'LA', label: 'LA' }
    ];
    fixture.detectChanges();

    const markers = fixture.debugElement.queryAll(By.css('map-advanced-marker'));
    expect(markers.length).toBe(2);
  });
});
