  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule } from '@angular/router';

  import { AppComponent } from './app.component';
  import { ProjectsComponent } from './projects/projects.component';
  import { ProjectComponent } from './projects/project/project.component';
  import { ProjectListComponent } from './projects/project-list/project-list.component';
  import { HttpModule } from "@angular/http";

  @NgModule({
    declarations: [
      AppComponent,
      //NavMenuComponent,
      //HomeComponent,
      //CounterComponent,
      //FetchDataComponent,
      ProjectsComponent,
      ProjectComponent,
      ProjectListComponent
    ],
    imports: [
      BrowserModule,//.withServerTransition({ appId: 'ng-cli-universal' }),
      //HttpClientModule,
      FormsModule,
      HttpModule//,
      /*RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
      ])*/
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
