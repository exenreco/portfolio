import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from "./project.model";

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/projects/list');
  }

  getProjectBySlug(slug: string): Observable<Project> {
    return this.http.get<Project>(`/api/projects/by-slug/${slug}`);
  }
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`/api/projects/by-id/${id}`);
  }
}
