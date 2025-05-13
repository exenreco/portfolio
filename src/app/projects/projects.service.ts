import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from "./project.model";
import { env } from "../env/env";
import { EnvProductionProjects, EnvDevelopmentProjects } from '../env/projects.env';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  /** Root URL for all project endpoints */
  private apiRoot: string;

  constructor(private http: HttpClient) {
    // Choose dev vs prod base URL at construction time
    this.apiRoot = env.production
      ? EnvProductionProjects.apiProjectsUrl
      : EnvDevelopmentProjects.apiProjectsUrl;
  }

  /** GET all projects */
  getProjects(): Observable<Project[]> {
    console.log( 'State', env.production );
    console.log( 'API ROUTE:', this.apiRoot );

    const url = `${this.apiRoot}/api/projects/list`;
    return this.http.get<Project[]>(url);
  }

  /** GET a single project by slug */
  getProjectBySlug(slug: string): Observable<Project> {
    const url = `${this.apiRoot}/api/projects/by-slug/${encodeURIComponent(slug)}`;
    return this.http.get<Project>(url);
  }

  /** GET a single project by numeric ID */
  getProjectById(id: number): Observable<Project> {
    const url = `${this.apiRoot}/api/projects/by-id/${id}`;
    return this.http.get<Project>(url);
  }
}
