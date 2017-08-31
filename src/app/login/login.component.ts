import { Component} from '@angular/core';
import  {LoginModel} from '../models/LoginModel';
import {RoleModel} from '../models/RoleModel'
import { LoginService } from './login-Service/login.service';
import { Router } from '@angular/router';
import { AppDashboard } from '../app.dashboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
 uname : string;
 pwd : string;
 model : any;
roleModel = new RoleModel();
  constructor(private loginSer : LoginService, private router: Router) { 
  
  }

 login()
 {
  this.model = new LoginModel();
  this.model.EmailAddress = this.uname;
  this.model.Password = this.pwd;
  this.loginSer.loginState(this.model).subscribe(
           data =>{ this.roleModel = data 
          if(this.roleModel != null)
            {
              debugger;
              localStorage.setItem('currentUser', JSON.stringify({ username: this.uname}));
              //this.router.navigate(['/appDashBoard']);
              // this.router.navigate(['/adminDashBoard']);
            //un coment below after implementing admin module
              if (this.roleModel.Roles[0].Name.toLowerCase() != 'releasemanager')
                {
              this.router.navigate(['/appDashBoard']);
                }
            else
              {
                this.router.navigate(['/adminDashBoard']);
              }
            }
          },         
           () => console.log('Request Completed'),
           
        ); 
   console.log( "TextAreaComponent::str: " + this.uname);
 }

}
