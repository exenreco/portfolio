import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ProjectSingleComponent } from './projects/project-single/project-single.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule,
    GoogleMapComponent,
    ProjectSingleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  isSticky = false;
  headerHeight = 0;
  searchTerm = '';
  isMenuOpen = false;
  currentYear = new Date().getFullYear();

  @ViewChild('siteHeader') siteHeader!: ElementRef;

  constructor(private router: Router) {}

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
