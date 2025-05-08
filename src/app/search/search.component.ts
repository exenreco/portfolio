import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { NgSwitch, NgFor, NgIf, NgSwitchCase } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    TruncatePipe
  ],
  styles: `
    .no-result.grid,
    .results-text.grid,
    .results-list.grid,
    .filter-options {
      margin: auto;
      padding: .4em;
      width: calc( 98% - .8em);
      max-width: calc(1440px - .8em);
    }
    .filter-options {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .filter-options .grid.header {
      margin: auto;
      cursor: pointer;
      font-style: italic;
      color: var(--text-color, #fff);
      background: var(--primary-shade-color, #000);
    }
    .filter-options .grid.header .row {
      align-items: center;
      justify-items: center;
      justify-content: center;
    }
    .filter-options .grid.header .row .left,
    .filter-options .grid.header .row .right {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-items: center;
      justify-content: center;
    }
    .filter-options .grid.header .row .left {
      justify-items: left;
      justify-content: left;
      width: calc(100% - 2em);
    }
    .filter-options .grid.header .row .right {
      width: 2em;
      height: 2em;
    }
    .filter-options .grid.options {
      color: var(--text-color, #fff);
      background: var(--primary-color, #333);
    }
    .filter-options .grid.options * {
      color: var(--text-color, #fff);
    }
    .filter-options:has(.row.trigger.open) .grid.options {
      display: flex;
      visibility: visible;
    }
    .filter-options:has(.row.trigger.close) .grid.options {
      display: none;
      visibility: hidden;
    }
    .toggle {
      display: flex;
      justify-content: space-between;
    }
    .toggle p {
      font-size: .925rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      margin-top: 14px;
      margin-bottom: 20px;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 55px;
      height: 25px;
      top: 8px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--accent-color-tertiary, #fff);
      transition: 0.4s;
      border-radius: 50px;
    }
    .slider:before {
      left: 2px;
      bottom: 2px;
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid var(--primary-shade-color, #333);
      transition: 0.4s;
    }
    input:checked + .slider:before {
      transform: translateX(calc(100% - -6px));
      background-color: var(--primary-shade-color, #333);
    }

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
    <section class="page search-results">
      <h1 class="page-title">Search Results</h1>

      <div class="grid results-text">
        <div class="column">
          <p style="font-style:italic;border-bottom: .2em solid #333;">
            Search results for "<strong>{{ searchTerm }}</strong>"
          </p>
        </div>
      </div>

       <div class="filter-options">
        <div class="grid header">
          <div
            class="row trigger"
            (click)="toggleFilter()"
            [ngClass]="{ open: isOpen, closed: !isOpen }"
          >
            <div class="left">
              <span class="icon"><i class="fa-solid fa-list"></i></span>
              <span class="text">Filters</span>
            </div>
            <div class="right" [ngStyle]="{ rotate: isOpen ? '180deg' : '0deg' }">
              <span class="icon indicator"><i class="fa-solid fa-chevron-down"></i></span>
            </div>
          </div>
        </div>
        <div
          class="grid options"
          [ngStyle]="{ display: isOpen ? 'block' : 'none' }"
        >
          <div class="column">
            <span *ngFor="let type of searchTypes" class="toggle">
              <p>{{ type | titlecase }}</p>
              <label class="switch">
                <input
                  type="checkbox"
                  [checked]="selectedTypes.has(type)"
                  (change)="toggleType(type)"
                />
                <span class="slider round"></span>
              </label>
            </span>
          </div>
        </div>
      </div>

      <div class="results-list grid">
        <div class="column">

          <!-- Show results if any; otherwise show "no results" -->
          <ng-container *ngIf="filteredResults.length > 0; else noResults">
            <div *ngFor="let item of filteredResults"
                 class="result-card"
                 [ngSwitch]="item.type">

              <!-- Project -->
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

              <!-- Blog -->
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

              <!-- Default -->
              <div *ngSwitchDefault class="default-result">
                <h3>
                  <a [routerLink]="item.url">{{ item.title }}</a>
                </h3>
                <p *ngIf="item.content" class="excerpt">
                  {{ item.content | truncate:100 }}
                </p>
              </div>

            </div>
          </ng-container>

          <!-- No-results template -->
          <ng-template #noResults>
            <div class="grid no-results" style="justify-content:center;">
              <p class="row"  style="justify-content:center;">
                No results found for “<strong>{{ searchTerm }}</strong>”
              </p>
            </div>
          </ng-template>

        </div>
      </div>
    </section>
  `
})
export class SearchComponent implements OnInit {
  isOpen = false;
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

  toggleFilter(): void {
    this.isOpen = !this.isOpen;
  }

  toggleType(type: string) {
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type);
    } else {
      this.selectedTypes.add(type);
    }
  }
}
