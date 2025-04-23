import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, RouterModule } from '@angular/router';
import { SearchService } from '../search.service';
import { NgSwitch, NgFor, NgIf, NgSwitchCase } from '@angular/common';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterModule, NgFor, NgIf, NgSwitch, NgSwitchCase, TruncatePipe],
  styles: `
    .result-card {
      margin: 1rem 0;
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .type-badge {
      background: #e0e0e0;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.8em;
      margin-left: 1rem;
    }

    .skills, .tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }

    .skill-tag, .tag {
      background: #f0f0f0;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.9em;
    }

    .excerpt {
      color: #666;
      margin: 0.5rem 0;
    }

    .filters {
      margin: 1rem 0;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filters label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `,
  template: `
    <section class="page-wrapper">
      <h1 class="page-title">Search Results for "{{ searchTerm }}"</h1>

      <div class="search-results">
        <div class="filters">
          <label *ngFor="let type of searchTypes">
            <input type="checkbox"
                  [checked]="selectedTypes.has(type)"
                  (change)="toggleType(type)">
            {{ type | titlecase }}
          </label>
        </div>

        <div class="results-list">
          <div *ngFor="let item of filteredResults"
              class="result-card"
              [ngSwitch]="item.type">

            <!-- Project Results -->
            <div *ngSwitchCase="'project'" class="project-result">
              <h3>
                <a [routerLink]="item.url">{{ item.title }}</a>
                <span class="type-badge">Project</span>
              </h3>
              <div class="skills" *ngIf="item.skills">
                <span class="skill-tag" *ngFor="let skill of item.skills">
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Blog Results -->
            <div *ngSwitchCase="'blog'" class="blog-result">
              <h3>
                <a [routerLink]="item.url">{{ item.title }}</a>
                <span class="type-badge">Blog Post</span>
              </h3>
              <p class="excerpt">{{ item.content | truncate:150 }}</p>
              <div class="tags">
                <span class="tag" *ngFor="let tag of item.tags">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Default Result -->
            <div *ngSwitchDefault class="default-result">
              <h3>
                <a [routerLink]="item.url">{{ item.title }}</a>
              </h3>
              <p *ngIf="item.content" class="excerpt">
                {{ item.content | truncate:100 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  results: any[] = [];
  selectedTypes = new Set<string>(['project', 'blog', 'skill', 'page']);
  searchTypes: string[] = ['project', 'blog', 'skill', 'page'];

  get filteredResults(): any[] {
    return this.results.filter(item =>
      this.selectedTypes.has(item.type)
    );
  }

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.results = this.searchService.search(this.searchTerm);
    });
  }

  toggleType(type: string) {
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type);
    } else {
      this.selectedTypes.add(type);
    }
  }
}
