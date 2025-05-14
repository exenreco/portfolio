// app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    // Initialize Google Maps mock
    window.google = {
      maps: {
        Map: class {},
        Marker: class {},
        LatLng: class {},
        MapTypeId: {},
        event: {},
        importLibrary: () => Promise.resolve({})
      } as unknown as typeof google.maps
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: {} },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    delete (window as any).google;
  });

  it('└── Should create the "App Component"!', () => {
    expect(component).toBeTruthy();
  });

  it('└── Should render the "Site title"!', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header .info .title h1').textContent)
      .toContain('Exenreco Bell');
  });
});
