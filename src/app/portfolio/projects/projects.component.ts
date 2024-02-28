import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from '../../core/services/header.service';
import { ProjectsService } from '../../core/services/projects.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  
  projects$: Observable<Project[]> | undefined; 

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
  ];

  constructor(private projectsService: ProjectsService, public router: Router) { }

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
  }

  formatStackName(stack: string[]): string {
    return stack.join(', ');
}

  get isProjectsTab(): boolean {
    return this.router.url === '/projects';
  }
}