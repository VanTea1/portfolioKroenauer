import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from '../../core/services/header.service';
import { ProjectsService } from '../../core/services/projects.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  
  projects$: Observable<Project[]> | undefined; // Change projects to projects$

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
  ];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
  }
}