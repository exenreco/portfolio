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
      title: 'Rhythmz Theme Development',
      skills: ['BackBoneJs', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/rhythmz-theme'
    },
    {
      id: 2,
      type: 'project',
      title: 'Portfolio Remodeling',
      skills: ['Angular', 'TypeScript', 'CSS', 'HTML', 'JavaScript'],
      url: '/projects/remodeling-a-portfolio'
    },
    {
      id: 3,
      type: 'project',
      title: 'Care Builders at Home Site Development',
      skills: ['BackBoneJs', 'React', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/care-builders'
    },
    {
      id: 4,
      type: 'project',
      title: 'E-mailer With Django',
      skills: ['Django', 'CSS', 'HTML', 'JavaScript', 'Markdown', 'SQL-lite', 'python'],
      url: '/projects/home-mailer'
    },
    {
      id: 5,
      type: 'project',
      title: 'Fulton Homes Site Development',
      skills: ['BackBoneJs', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/fulton-homes'
    },
    {
      id: 6,
      type: 'project',
      title: 'Action Site With Django',
      skills: ['Django', 'CSS', 'HTML', 'JavaScript', 'Markdown', 'SQL-lite', 'python'],
      url: '/projects/action-site'
    },
    {
      id: 7,
      type: 'project',
      title: 'Alkamist Theme Development',
      skills: ['BackBoneJs', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/alkamist-theme'
    },
    {
      id: 8,
      type: 'project',
      title: 'Home Wiki with Django',
      skills: ['Django', 'CSS', 'HTML', 'JavaScript', 'Markdown', 'SQL-lite', 'python'],
      url: '/projects/wiki'
    },

    // Skills
    {
      id: 9,
      type: 'skill',
      title: 'TypeScript',
      content: 'Exenreco is versatile in typeScript...',
      url: '/resume'
    },
    {
      id: 10,
      type: 'skill',
      title: 'javaScript',
      content: 'Exenreco is versatile in javaScript...',
      url: '/resume'
    },
    {
      id: 11,
      type: 'skill',
      title: 'Angular',
      content: 'Exenreco is versatile in Angular...',
      url: '/resume'
    },
    {
      id: 12,
      type: 'skill',
      title: 'jQuery',
      content: 'Exenreco is versatile in jQuery...',
      url: '/resume'
    },
    {
      id: 13,
      type: 'skill',
      title: 'BackBoneJs',
      content: 'Exenreco is versatile in BackBoneJs...',
      url: '/resume'
    },
    {
      id: 14,
      type: 'skill',
      title: 'C#',
      content: 'Exenreco is versatile in C#...',
      url: '/resume'
    },
    {
      id: 15,
      type: 'skill',
      title: 'CSS',
      content: 'Exenreco is versatile in CSS...',
      url: '/resume'
    },
    {
      id: 16,
      type: 'skill',
      title: 'NodeJs',
      content: 'Exenreco is versatile in NodeJs...',
      url: '/resume'
    },
    {
      id: 17,
      type: 'skill',
      title: 'ThreeJs',
      content: 'Exenreco is versatile in ThreeJs...',
      url: '/resume'
    },
    {
      id: 18,
      type: 'skill',
      title: 'wordPres',
      content: 'Exenreco is versatile in WordPres...',
      url: '/resume'
    },
    {
      id: 19,
      type: 'skill',
      title: 'PHP',
      content: 'Exenreco is versatile in PHP...',
      url: '/resume'
    },
    {
      id: 20,
      type: 'skill',
      title: 'Python',
      content: 'Exenreco is versatile in Python...',
      url: '/resume'
    },
    {
      id: 21,
      type: 'skill',
      title: 'Django',
      content: 'Exenreco is versatile in Django...',
      url: '/resume'
    },
    {
      id: 22,
      type: 'skill',
      title: 'NoSQL',
      content: 'Exenreco is versatile in NoSQL...',
      url: '/resume'
    },
    {
      id: 23,
      type: 'skill',
      title: 'SQL-lite',
      content: 'Exenreco is versatile in SQL-lite...',
      url: '/resume'
    },

    // Pages
    {
      id: 24,
      type: 'page',
      title: 'Home',
      content: '',
      url: '/home'
    },
    {
      id: 25,
      type: 'page',
      title: 'Projects',
      content: `Welcome to my Projects page! A curated showcase of the applications,
      themes, and sites I’ve built to hone my skills and solve real-world problems.
      Each project demonstrates a different facet of my expertise, from front-end frameworks
      and modern JavaScript patterns to full-stack back-end development and WordPress theming.
      Feel free to explore the list below and click through to dive into the technical details,
      see live demos, or review source code.`,
      url: '/projects'
    },
    {
      id: 26,
      type: 'page',
      title: 'Resume',
      content: `Web developer with an Information Technology degree and a
      background in Mechanical & Electrical Engineering. A versatile, problem
      solving professional who excels in diverse fields. Quick learner with a
      passion for taking on new challenges.`,
      url: '/resume'
    },
    {
      id: 27,
      type: 'page',
      title: 'About',
      content: `Hello! I’m Exenreco Bell, a passionate Web Developer and Graphic
       Designer based in Omaha, Nebraska. With an Associate’s Degree in Information
       Technology (majoring in Web Development and minoring in Computer Programming)
       and a foundation in Mechanical & Electrical Engineering, I bring a unique blend
       of creativity, technical rigor, and problem-solving prowess to every project.`,
      url: '/about'
    },
    {
      id: 28,
      type: 'page',
      title: 'Contact',
      content: `Getting in touchThanks for considering me; to reach out via email or phone at:
      Email: Exenreco19@yahoo.com or Phone: +1(402)515-5928`,
      url: '/contact'
    },
    // Blog Posts
    {
      id: 29,
      type: 'blog',
      title: 'Rhythmz Theme Development',
      content: `Designing for nightlife is all about energy, motion, and
      bold expression, which is exactly what I set out to capture with Rhythmz Theme,
      a custom WordPress theme built from the ground up for nightclubs, DJs, live venues,
      and entertainment brands. This article explores the creative process, technical details,
      and standout features of Rhythmz Theme.`,
      tags: ['BackBoneJs', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/rhythmz-theme'
    },
    {
      id: 30,
      type: 'blog',
      title: 'Portfolio Remodeling',
      content: `Creating a portfolio is more than just displaying work; it's
      about crafting an experience that reflects your skills, personality, and technical abilities.
      In this article, I’ll walk through the process of building my personal portfolio using
      Angular 18, highlighting the design choices, technologies used, and lessons learned.`,
      tags: ['Angular', 'TypeScript', 'CSS', 'HTML', 'JavaScript'],
      url: '/projects/remodeling-a-portfolio'
    },
    {
      id: 31,
      type: 'blog',
      title: 'E-mailer With Django',
      content: `What starts as an academic exercise can quickly evolve into a practical tool
      and that’s exactly what happened with my Django Mailing Application. Originally conceived
      as a school project to demonstrate web development fundamentals, this app proved so robust
      and versatile that I’ve now deployed it as a service on my own home network. In this article,
      I’ll dive into the motivations, architecture, and features that power this localized
      mailing system.`,
      tags: ['Django', 'CSS', 'HTML', 'JavaScript', 'Markdown', 'SQL-lite', 'python'],
      url: '/projects/home-mailer'
    },
    {
      id: 32,
      type: 'blog',
      title: 'Fulton Homes Site Development',
      content: `When working with WordPress, child themes offer a powerful way to extend and
      customize existing themes without losing the ability to update the parent. For Fulton
      Homes Education, I developed a child theme of the default Twenty Sixteen theme adding
      bespoke enrollment tools, integrated video training modules, and tailored styling to meet
      the needs of an educational center.`,
      tags: ['BackBoneJs', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/fulton-homes'
    },
    {
      id: 33,
      type: 'blog',
      title: 'Action Site With Django',
      content: `Creating a simplified version of a real-world platform is a powerful way to learn web
      development and that’s exactly why I designed this Django Craigslist Clone as a school
      project. This site lets authenticated users post classifieds, browse by category,
      save listings to a wishlist, and discover similar items. Here’s how I built it,
      what technologies I chose, and the lessons I gained along the way.`,
      tags: ['Django', 'CSS', 'HTML', 'JavaScript', 'Markdown', 'SQL-lite', 'python'],
      url: '/projects/action-site'
    },
    {
      id: 34,
      type: 'blog',
      title: 'Alkamist Theme Development',
      content: `A portfolio theme needs to balance aesthetic flair with
      flexibility and performance. For my primary portfolio, I developed a
      hybrid WordPress theme, leveraging both traditional PHP templates and
      the block editor to showcase my work through custom patterns, templates, and reusable
      blocks. Here’s how I built it and the lessons learned along the way.`,
      tags: ['BackBoneJs', 'javaScript', 'CSS', 'HTML', 'SCSS', 'PHP', 'Composer', 'WordPress'],
      url: '/projects/alkamist-theme'
    },
    {
      id: 35,
      type: 'blog',
      title: 'Home Wiki with Django',
      content: `Sometimes the simplest ideas make the most enduring tools. What began as a school
      assignment creating a basic wiki platform, has since graduated into a fully functional
      service running in my home lab. In this article, I’ll explore how I built this Django
      Wiki, the core features it offers, and the lessons I learned along the way.`,
      tags: ['Django', 'CSS', 'HTML', 'JavaScript', 'Markdown', 'SQL-lite', 'python'],
      url: '/projects/wiki'
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
