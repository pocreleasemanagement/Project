import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  {LoginModel} from '../../models/LoginModel';
import {RoleModel} from '../../models/RoleModel';

const BASE_URL = 'https://releasemanagementapi.azurewebsites.net/api/Login';
@Injectable()
export class LoginService {
 private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

     loginState(login : LoginModel) {
let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
  return this.http.post(BASE_URL, login,options)
	             .map(response => response.json() as RoleModel)
                   .catch(this.handleErrorPromise);
      
    }

     private  extractData(res: Response) {
	let body = res.json() as RoleModel;
        return body || {};
    }
    
 private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	

}
