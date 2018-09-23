import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { Project } from './shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
  }

}
