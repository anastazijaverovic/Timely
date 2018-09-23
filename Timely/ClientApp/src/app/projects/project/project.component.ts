import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  //searchKey: string;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.reset();
  
    this.projectService.selectedProject = {
      ProjectId: null,
      Name : '',
      Note : '',
      Tag: '',
      TimeWorked: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.ProjectId == null) {
      this.projectService.postProject(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.projectService.getProjectList();
        })
    }
    else {
      this.projectService.putProject(form.value.ProjectId, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.projectService.getProjectList();
        });
    }
  }

}
