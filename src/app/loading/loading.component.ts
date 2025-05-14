import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { LoadingService } from './loading.service';
import { SafeHtmlPipe } from './safe-html.pipe';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [ CommonModule, NgIf, NgFor, SafeHtmlPipe ],
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(5px); /* Apply blur effect */
      -webkit-backdrop-filter: blur(5px); /* For Safari compatibility */
    }
    .loading-overlay .grid,
    .loading-overlay .grid .column {
      margin: auto;
      padding: .4em;
      width: calc( 100% - .8em);
      max-width: calc(1440px - .8em);
      align-items: center;
      justify-items: center;
      justify-content: center;
    }
    .post-text {
      height: auto;
      display: block;
      text-align: center;
      color: var(--text-color, #fff);
    }
    .post-text .load-heading {
      width: 100%;
      display: flex;
      flex: 0 0 auto;
      text-align: center;
      align-items: center;
      justify-items: center;
      padding: .4em 0 .4em 0;
      justify-content: center;
      font-weight: bold;
      margin-top: .4em;
      animation: pulse 2s infinite alternate ease-in-out;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid var(--text-color, #fff);
      border-top: 4px solid var(--primary-color, #007bff);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { color: var(--text-color, #fff); }
      50% { color: var(--primary-color, #007bff); }
      100% { color: var(--accent-color-primary, #ff69b4); }
    }
  `],
  template: `
    <ng-container *ngIf="loadingService.state$ | async as state">
      <div class="loading-overlay" *ngIf="state.isLoading">
        <div class="grid">
          <div class="column">
            <div class="loading-spinner"></div>
            <p class="post-text" *ngIf="state.message">
              <strong class="load-heading">Fetching Resources...</strong><br>
              <span [innerHTML]="state.message | safeHtml"></span>
            </p>
          </div>
        </div>
      </div>
    </ng-container>
  `,

})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
