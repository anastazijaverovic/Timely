import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
import { timeout } from 'q';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    searchKey: any;

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectList();
  }

  showForEdit(proj : Project) {
    this.projectService.selectedProject = Object.assign({}, proj);
    console.log("showForEdit fja:" + this.projectService.selectedProject);
  }

  onDelete(id: number) {
    console.log(id);
    if (confirm('Do you want to delete this project ?') == true) {
      this.projectService.deleteProject(id)
        .subscribe(x => {
          this.projectService.getProjectList();
        })
    }
  }

  startOrStop() {
    var startTime = new Date();
    
  }
 

}

