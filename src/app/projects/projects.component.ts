import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: ``,
  template: `
    <section class="page-wrapper">
      <h1 class="page-title">Projects</h1>
    </section>
  `
})
export class ProjectsComponent {

}
