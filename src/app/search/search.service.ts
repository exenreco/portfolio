import { Injectable } from '@angular/core';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchItems: any[] = [
    // Projects
    {
      id: 1,
      type: 'project',
      title: 'Portfolio Website',
      skills: ['Angular', 'TypeScript', 'SCSS'],
      url: '/projects/portfolio'
    },
    {
      id: 2,
      type: 'project',
      title: 'E-commerce Platform',
      skills: ['React', 'Node.js', 'MongoDB'],
      url: '/projects/ecommerce'
    },

    // Blog Posts
    {
      id: 3,
      type: 'blog',
      title: 'Getting Started with Angular',
      content: 'Learn how to build modern web applications with Angular...',
      tags: ['angular', 'web development'],
      url: '/blog/angular-intro'
    },

    // Skills
    {
      id: 4,
      type: 'skill',
      title: 'TypeScript',
      content: 'Strongly typed JavaScript superset',
      url: '/skills/typescript'
    },

    // Pages
    {
      id: 5,
      type: 'page',
      title: 'Home',
      content: '',
      url: '/home'
    },
    {
      id: 7,
      type: 'page',
      title: 'Projects',
      content: '',
      url: '/projects'
    },
    {
      id: 6,
      type: 'page',
      title: 'Resume',
      content: 'Web developer with an Information Technology degree...',
      url: '/resume'
    },
    {
      id: 8,
      type: 'page',
      title: 'About',
      content: '',
      url: '/about'
    },
    {
      id: 9,
      type: 'page',
      title: 'Contact',
      content: '',
      url: '/contact'
    },
  ];

  search(query: string): Search[] {
    const searchTerm = query?.toLowerCase().trim() || '';
    if (!searchTerm) return [];

    return this.searchItems.filter(item => {
      // Common search fields
      const inTitle = item.title.toLowerCase().includes(searchTerm);
      const inContent = item.content?.toLowerCase().includes(searchTerm);

      // Type-specific fields
      const inSkills = item.skills?.some((skill: string) =>
        skill.toLowerCase().includes(searchTerm)
      );

      const inTags = item.tags?.some((tag:string) =>
        tag.toLowerCase().includes(searchTerm)
      );

      return inTitle || inContent || inSkills || inTags;
    });
  }
}
