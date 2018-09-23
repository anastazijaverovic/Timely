import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Project } from './project.model';

@Injectable()
export class ProjectService {

  selectedProject: Project;
  projectList: Project[];

  constructor(private http : Http) { }

  postProject (proj : Project){ 
    var body = JSON.stringify(proj);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });

    return this.http.post('https://localhost:44324/api/Projects',body,requestOptions).map(x => x.json());
  }


  putProject(id: number, proj: Project) {
    console.log(id);
    var body = JSON.stringify(proj);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });

    return this.http.put('https://localhost:44324/api/Projects/' + id, body, requestOptions).map(res => res.json());
  }

  getProjectList() {
    this.http.get('https://localhost:44324/api/Projects')
      .map((data: Response) => {
        return data.json() as Project[];
      }).toPromise().then(x => {
        this.projectList = x;
        //if (this.projectList.length > 0) console.log("Ima podataka");
        //console.log(this.projectList);
      })
  }

  deleteProject(id: number) {
    //console.log(id)
    return this.http.delete('https://localhost:44324/api/Projects/' + id).map(res => res.json());
  }

  /*
  applyFilter() {
    //this.projectList.toString().includes(this.searchKey.trim().toLowerCase());
    this.projectList.find(searchKey); //= this.searchKey.trim().toLowerCase();
  }
  */
}
