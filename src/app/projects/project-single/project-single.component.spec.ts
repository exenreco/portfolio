import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectSingleComponent } from './project-single.component';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { PROJECTS } from '../projects.data'; // Import your actual projects data

describe('ProjectSingleComponent', () => {
  let component: ProjectSingleComponent;
  let fixture: ComponentFixture<ProjectSingleComponent>;
  const mockSlug = PROJECTS[0].slug; // Get a valid slug from your data

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSingleComponent],
      providers: [
        // Configure router
        provideRouter([]),

        // Mock ActivatedRoute with valid slug
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => mockSlug
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('└── Should create the component and find project', () => {
    expect(component).toBeTruthy();
    expect(component.project).toBeDefined();
    expect(component.project?.slug).toBe(mockSlug);
  });

  it('└── Should handle missing project', () => {
    // Override mock with invalid slug
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [ProjectSingleComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'invalid-slug'
              }
            }
          }
        }
      ]
    }).compileComponents();

    const invalidFixture = TestBed.createComponent(ProjectSingleComponent);
    const invalidComponent = invalidFixture.componentInstance;
    invalidFixture.detectChanges();

    expect(invalidComponent.project).toBeUndefined();
  });
});
