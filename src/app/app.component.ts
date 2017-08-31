import { Component } from '@angular/core';

@Component({
  selector: 'app-roots',
   moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/admin-style.css']
})


export class AppComponent  {
  title = 'RELEASE MANAGEMENT';
  user : string;
  constructor()
  {
this.user = JSON.parse(localStorage.getItem('currentUser')).username;
  }

}
