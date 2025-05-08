import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { SearchService } from './search.service';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockSearchService: jasmine.SpyObj<SearchService>;

  beforeEach(async () => {
    // Create mock service and route
    mockSearchService = jasmine.createSpyObj('SearchService', ['search']);

    await TestBed.configureTestingModule({
      imports: [SearchComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ q: 'test' })
          }
        },
        { provide: SearchService, useValue: mockSearchService }
      ]
    }).compileComponents();

    // Mock service response
    mockSearchService.search.and.returnValue([
      {
        id:     0,
        url:    '/projects/test',
        type:   'project',
        title:  'Test Project',
        skills: ['Angular', 'TypeScript']
      }
    ]);

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('└── Should create the "Search Component"!', () => {
    expect(component).toBeTruthy();
  });

  it('└── Should display search results', () => {
    const results = fixture.nativeElement.querySelectorAll('.result-card');
    expect(results.length).toBe(1);
  });

  it('└── Should show search term', () => {
    const searchTermEl = fixture.nativeElement.querySelector('strong');
    expect(searchTermEl.textContent).toContain('test');
  });

  it('└── Should filter results by type', () => {
    // Initial results
    expect(component.filteredResults.length).toBe(1);

    // Toggle filter
    component.selectedTypes.delete('project');
    fixture.detectChanges();

    const results = fixture.nativeElement.querySelectorAll('.result-card');
    expect(results.length).toBe(0);
  });

  it('└── Should handle empty results', () => {
    mockSearchService.search.and.returnValue([]);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const noResults = fixture.nativeElement.querySelector('.no-results');
    expect(noResults).toBeTruthy();
  });

  it('└── Should toggle filter visibility', () => {
    // target the element with the (click) binding
    const trigger = fixture.nativeElement.querySelector('.row.trigger');
    trigger.click();
    fixture.detectChanges();

    // now isOpen should be true
    expect(component.isOpen).toBeTrue();

    // and the options panel should be in the DOM
    const options = fixture.nativeElement.querySelector('.grid.options');
    expect(options).not.toBeNull();
  });
});
