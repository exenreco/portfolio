import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotfoundComponent } from './notfound.component';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundComponent],
      providers: [
        provideRouter([]), // Add router configuration
        { provide: ActivatedRoute, useValue: {} } // Mock ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('└── Should create the "404/Not Found Component"!', () => {
    expect(component).toBeTruthy();
  });
});
