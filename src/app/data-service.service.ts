import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as moment from "moment";
import 'rxjs/Rx';

@Injectable()
export class DataServiceService {
 constructor(private http: Http) { }
 public test:any;
 public baseApi = 'http://releasemanagementapi.azurewebsites.net/api/findrelease/';
 public weekDays=[{id:1,name:'MON',dt:null},{id:2,name:'TUE',dt:null},{id:3,name:'WED',dt:null},{id:4,name:'THU',dt:null},{id:5,name:'FRI',dt:null},{id:6,name:'SAT',dt:null},{id:0,name:'SUN',dt:null}];
 public Release=[ ];
 public Time=[{id:"1",name:"10"},{id:"2",name:"11"},{id:"3",name:"12"},{id:"4",name:"13"},{id:"5",name:"14"},{id:"7",name:"15"}];
  
  public getReleaseData(dt) {
    
    return this.http.get( this.baseApi+dt).map(response => response.json());
  }
   public getData(){
  return this.Release;
  }
  public getTime(){
  return this.Time;
  }
 public getWeekDay(){
  return this.weekDays;
  }
public getTimeDetail(id,hour){
  var print;
     var result=this.Release.filter(x => x.id==id && x.detail.fromTime==hour);
    if(result.length>0)
     print=result;
  
return print;
}
  public getCount(id){
  var result=this.Release.filter(x => x.id==id ).length;
   
  
return result;
}
}
