import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Project } from './project.interface';
import { ProjectsService } from './projects.service';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: `
    .masonry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: masonry; /* Fallback for browsers that don't support masonry */
      grid-auto-flow: dense;
      gap: 1.5rem;
      align-items: start;
    }

    .masonry-item {
      break-inside: avoid;
      position: relative;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      aspect-ratio: var(--aspect-ratio, 16/9);
    }

    .grid.footer .row .btn {
      width: 50%;
      max-width: 50%;
      min-width: 50%;
      padding: 0;
    }

    .project-info {
      padding: .5em;
      background: white;
    }

    /* Randomize aspect ratios for demo - remove if using actual images */
    .masonry-item:nth-child(odd) .project-image {
      --aspect-ratio: 4/3;
    }

    .masonry-item:nth-child(even) .project-image {
      --aspect-ratio: 3/4;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .masonry-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }

    /* Fallback for browsers without masonry support */
    @supports not (grid-template-rows: masonry) {
      .masonry-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: auto;
        grid-gap: 1.5rem;
      }

      .masonry-item {
        grid-row-end: span 4;
      }

      .masonry-item:nth-child(2n) {
        grid-row-end: span 5;
      }

      .masonry-item:nth-child(3n) {
        grid-row-end: span 6;
      }
    }
  `,
  template: `
    <section class="page projects">
      <h1 class="page-title">Projects</h1>
      <div class="masonry-grid">
        <div class="masonry-item" *ngFor="let project of projects">
          <figure class="project-card">
            <img
              [src]="project.cover"
              [alt]="project.title" class="project-image"
              [style.--aspect-ratio]="project.aspectRatio || 16/9"
            >
            <figcaption class="project-info">
              <h2>{{ project.title }}</h2>
              <p>{{ project.excerpt }}</p>
              <span>{{ project.time | date }}</span>
              <footer class="grid footer">
                <div class="row">
                  <a class="btn tertiary" [routerLink]="['/projects', project.slug]">Learn More</a>
                  <a class="btn tertiary" href="{{project.gitRepo}}" target="_blank">
                    <i class="fa-brands fa-github">
                  </i></a>
                </div>
              </footer>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: (projects) => this.projects = projects,
      error: (error) => console.error('Error fetching projects:', error)
    });
  }
}
