import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectSingleComponent } from './project-single.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { of, BehaviorSubject } from 'rxjs';

describe('ProjectSingleComponent', () => {
  let
    fixture: ComponentFixture<ProjectSingleComponent>,
    component: ProjectSingleComponent,
    httpMock: HttpTestingController
  ;

  const
    testSlug = 'rhythmz-theme',
    paramMap$ = new BehaviorSubject<ParamMap>(convertToParamMap({ slug: testSlug })),
    mockProject = {
      id: 1,
      slug: testSlug,
      title: 'Test Project',
      cover: 'test.jpg',
      content: '<p>Project content</p>',
      time: new Date().toISOString()
    }
  ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProjectSingleComponent ],
      providers: [
        provideHttpClient(),         //register the real HttpClient
        provideHttpClientTesting(),  //register the testing backend
        {
          provide: ActivatedRoute,
          useValue: { paramMap: paramMap$.asObservable() }
        },
        ProjectsService
      ]
    }).compileComponents();

    fixture    = TestBed.createComponent(ProjectSingleComponent);
    component  = fixture.componentInstance;
    httpMock   = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('└── Should create the component and find project', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne(req =>
      req.url.endsWith(`/api/projects/by-slug/${testSlug}`)
    );
    req.flush(mockProject);

    expect(component).toBeTruthy();
    expect(component.project?.slug).toBe(testSlug);
  });

  it('└── Should create the component and load the project by slug', () => {

  fixture.detectChanges();
  const req = httpMock.expectOne(req =>
    req.url.endsWith(`/api/projects/by-slug/${testSlug}`)
  );

  expect(req.request.method).toBe('GET');
  req.flush(mockProject);
  fixture.detectChanges();

  expect(component).toBeTruthy();
  expect(component.project?.slug).toBe(testSlug);
});

it('└── Should handle project loading error', () => {
  fixture.detectChanges();

  const req = httpMock.expectOne(req =>
    req.url.endsWith(`/api/projects/by-slug/${testSlug}`)
  );

  req.flush('Not found', { status: 404, statusText: 'Not Found' });

  fixture.detectChanges();

  expect(component.project).toBeUndefined();
  expect(component.error).toContain('Project not found');
});
});
