import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/project.model';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, RouterOutlet, RouterLink,
    CommonModule, NgIf, NgFor,
    FormsModule, GoogleMapComponent,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'portfolio';
  isSticky = false;
  headerHeight = 0;
  searchTerm = '';
  isMenuOpen = false;
  currentYear = new Date().getFullYear();

  // recent projects setup
  recentProjects: Project[] = [];
  loading = true;
  error: string | null = null;

  @ViewChild('siteHeader') siteHeader!: ElementRef;

  constructor(private router: Router, private projectsService: ProjectsService) {}

  // Search functionality
  performSearch(event: Event) {
    event.preventDefault();
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchTerm.trim() }
      });
      this.searchTerm = '';
    }
  }

  ngOnInit() {
    this.loadRecentProjects();
  }

  private loadRecentProjects() {
    this.projectsService.getProjects().subscribe({
      next: (projects) => {
        this.recentProjects = projects.slice(0, 5); // Get first 5 projects
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load recent projects';
        this.loading = false;
        console.error('Error loading projects:', err);
      }
    });
  }

  // Scroll handler
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY > 0;
  }

  // Consolidated resize handler
  @HostListener('window:resize', ['$event'])
  onResize() {
    // Update header height
    this.headerHeight = this.siteHeader.nativeElement.offsetHeight;

    // Close menu on desktop screens
    if (window.innerWidth > 800) {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  ngAfterViewInit() {
    this.headerHeight = this.siteHeader.nativeElement.offsetHeight;
  }

  // Menu functionality
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu') && !target.closest('.hamburger')) {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  @HostListener('document:keydown.escape')
  closeOnEscape() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
