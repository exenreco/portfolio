import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProjectsService } from './projects.service';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Mock data
const PROJECTS_MOCK = [{
  id:       0,
  slug:     'test',
  time:     new Date('05-08-2025'),
  cover:    'image.png',
  title:    'New Test',
  gitRepo:  '',
  excerpt:  'This is a test...',
  content:  `This is a test from Karma!`,
}];

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let mockProjectsService: jasmine.SpyObj<ProjectsService>;

  beforeEach(async () => {
    // Create spy service with getProjects method
    mockProjectsService = jasmine.createSpyObj('ProjectsService', ['getProjects']);
    mockProjectsService.getProjects.and.returnValue(of(PROJECTS_MOCK));

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent], // Import standalone component
      providers: [
        // HTTP testing providers
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),

        // Router providers
        provideRouter([]),
        { provide: ActivatedRoute, useValue: {} },

        // Service mock
        { provide: ProjectsService, useValue: mockProjectsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('└── Should create the "Projects Component"!', () => {
    expect(component).toBeTruthy();
  });

  it('└── Should display projects from "Projects Service"!', () => {
    const projectElements = fixture.nativeElement.querySelectorAll('.masonry-item');
    expect(projectElements.length).toBe(PROJECTS_MOCK.length);
  });

  /*it(' -> Should call getProjects on initialization', () => {
    expect(mockProjectsService.getProjects).toHaveBeenCalled();
  });

  it(' -> Should handle service errors', () => {
    mockProjectsService.getProjects.and.returnValue(
      throwError(() => new Error('Test error'))
    );
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it(' -> Should render project titles', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('strong').textContent)
      .toContain(PROJECTS_MOCK[0].title);
  });*/
});
