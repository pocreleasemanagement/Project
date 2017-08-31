import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-2-data-table';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service';
import { AppDashboard } from './app.dashboard';
import { ContainerComponent } from './container/container.component';
import { MyqueueComponent } from './myqueue/myqueue.component';
import { ReleaseboardComponent } from './releaseboard/releaseboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataTableDemo1RemoteComponent } from './releaseboard/data-table-demo1-remote';
import { routing } from './app.routing';
import { NewReleaseRequestComponent } from '../app/partialComponents/new-release-request/new-release-request.component';
import { DateTimePickerModule } from 'ng-pick-datetime';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MeetingCardComponent } from './meeting-card/meeting-card.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login-Service/login.service';
import { AuthGuard } from './login/AuthGuard';

@NgModule({
  entryComponents : [
    LandingComponent
  ],
   providers : [
    { provide: APP_BASE_HREF, useValue: '/'},DataServiceService,LoginService,AuthGuard],
  declarations: [
     LoginComponent,
     LandingComponent,
    AppComponent,
     AppDashboard,
   ContainerComponent,
    MyqueueComponent,
    ReleaseboardComponent,
    DataTableDemo1RemoteComponent,
    NewReleaseRequestComponent,
    MeetingCardComponent
    
    
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    routing,
    MdDialogModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    NgbModule.forRoot()
  ],
  bootstrap: [LandingComponent]
})
export class AppModule { }
