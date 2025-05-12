import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-single',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: `
    .project.grid {
      padding: .4em;
      width: calc(95% - .8em);
      margin: 2em auto 2em auto;
      max-width: calc(1440px - .8em);
    }
    .project.grid .row .post-image {
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      height: auto;
      max-height: 30em;
      align-items: flex-start;
      justify-items: center;
      justify-content: center;
      overflow: hidden;
      width: calc(30% - .8em);
      background: var(--primary-shade-color, #333);
    }
    .project.grid .row .post-content {
      width: calc(100% - 32%);
    }
    .project.grid .row .post-image img {
      width: 98%;
      height: auto;
      margin: auto;
      display: block;
      position: relative;
    }
    .time {
      margin: auto;
      padding: .4em;
      display: block;
      text-align: right;
      position: relative;
      font-style: italic;
      border-radius: .4em;
      width: calc(98% - .8em);
      background: rgba(0, 0, 0, 0.05);
    }
    @media (max-width: 800px) {
      .project.grid .row {
        flex-direction: column;
      }
      .project.grid .row .post-image,
      .project.grid .row .post-content {
        width: 95%;
        margin: auto;
        margin-bottom: 1.25em;
      }
      .project.grid .row .post-image { border: .4em solid var(--primary-shade-color, #333); }
    }
  `,
  template: `
    <section class="page project-single">
      <h1 *ngIf="project" class="page-title">{{ project.title }}</h1>
      <main class="project grid">
        <!-- Loading State -->
        <div *ngIf="loading" class="loading-message">
          <p>Loading Project...</p>
        </div>

        <!-- Error State -->
        <div *ngIf="error" class="error-message" style="font-weight: bold; text-align: center;">
          {{ error }}
        </div>

        <!-- Content State -->
        <div *ngIf="project && !loading" class="row">
          <aside class="post-image">
            <img [src]="project.cover" [alt]="project.title">
          </aside>
          <article class="post-content">
            <i class="time">Posted on - <time>{{ project.time | date }}</time></i>
            <div [innerHTML]="project.content"></div>
          </article>
        </div>
      </main>
    </section>
  `
})
export class ProjectSingleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);

  project?: Project;
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug');
      if (!slug) {
        this.error = 'Invalid project URL';
        this.loading = false;
        return;
      }

      this.resetState();
      this.loadProject(slug);
    });
  }

  private resetState() {
    this.loading = true;
    this.error = null;
    this.project = undefined;
  }

  private loadProject(slug: string) {
    this.projectsService.getProjectBySlug(slug).subscribe({
      next: (project) => {
        this.project = {
          ...project,
          time: new Date(project.time)
        };
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching project:', err);
        this.error = 'Project not found or failed to load';
        this.loading = false;
      }
    });
  }
}
