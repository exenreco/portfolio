import { Component, OnInit} from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: `
    .page.notfound {
      margin: auto;
      width: calc(98% - .8em);
    }
    .grid.notfound .row.content {
      margin: auto;
      width: calc(100% - .8em);
      max-width: calc(1440px - .8em);
      align-items: center;
      justify-items: center;
      justify-content: center;
    }
    .grid.notfound .row.content .image-container {
      padding: .4em;
      border-radius: .4em;
      background: whitesmoke;
      width: calc(30% - .8em);
    }
    .grid.notfound .row.content .image-container img {
      width: 99%;
      height: auto;
      margin: auto;
      display: block;
      position: relative;
    }
    .grid.notfound .row.content p {
      width: calc(100% - 28%);
      font-size: 1.625rem;
    }
    @media (max-width: 1080px) {
      .grid.notfound {
        width: calc(90% - .8em);
        max-width: none;
      }
    }
    @media (max-width: 800px) {
      .grid.notfound {
        width: calc(90% - .8em);
        max-width: none;
      }
      .grid.notfound .row {
        flex-direction: column-reverse;
      }
      .grid.notfound .row.content .image-container {
        width: 98%;
      }
    }
  `,
  template: `
    <section class="page notfound">
      <h1 class="page-title">404</h1>
      <div class="grid notfound">
        <div class="row content">
            <span class="image-container"><img src="assets/images/error.gif"></span>
            <p>
              <strong>404.</strong> That's an error.<br> The requested URL
              "<strong>{{ currentUrl }}</strong>" was not found on this server.<br>
              <span style="color: grey;">That's all we know.</span><br>
              <span>
                <a class="btn primary" routerLink="/">
                  <i class="fa-solid fa-house"></i> Go back home
                </a>
              </span>
            </p>
          </div>
      </div>
    </section>
  `
})
export class NotfoundComponent {
  currentUrl = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // router.url gives you everything after the domain, including query params
    this.currentUrl = this.router.url;
  }
}
