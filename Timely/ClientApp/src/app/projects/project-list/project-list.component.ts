import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  time: number = 0;
  interval;
  timeWorked;
  startTime;
  stopTime;
  diff;
  projects: Project[];
  

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

  startTimer(project: Project, id: number) {

    console.log("id from start click: " + id);

    if (!this.startTime)
      this.startTime = new Date();

  }

  pauseTimer(project: Project, id: number) {
    
    this.stopTime = new Date();
    this.timeWorked = this.stopTime - this.startTime;

    //this.timeWorked = Math.floor(Math.round((this.diff / 1000) % 60) / 60);

    console.log("ms:" + (this.stopTime - this.startTime));

    this.projects = this.projectService.projectList;
    console.log(this.projects);

    const findProject = this.projects.find(project => project.ProjectId === id);
    if (findProject) {
      findProject.timeWorked = this.timeWorked;
      console.log(findProject.timeWorked);

    this.projectService.putProject(project.ProjectId, project)
      .subscribe(data => {
        this.projectService.getProjectList();
      });
    }
/*
    this.projectService.selectedProject = Object.assign({}, project);

    this.projectService.selectedProject.TimeWorked = this.timeWorked;

    this.projectService.putProject(id, project)
      .subscribe(data => {
        console.log(this.projectService.selectedProject.ProjectId);
        console.log(this.projectService.selectedProject.TimeWorked);
        this.projectService.getProjectList();
      });
      */

    //return project.ProjectId;
  }
 

}

