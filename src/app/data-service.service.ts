import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as moment from "moment";
import 'rxjs/Rx';

@Injectable()
export class DataServiceService {
 constructor(private http: Http) { }
 public test:any;
 public baseApi = 'http://releasemanagementapi.azurewebsites.net/api/findrelease/';
 public weekDays=[{id:1,name:'MON'},{id:2,name:'TUE'},{id:3,name:'WED'},{id:4,name:'THU'},{id:5,name:'FRI'},{id:6,name:'SAT'},{id:0,name:'SUN'}];
 public Release=[ ];
 public Time=[{id:"1",name:"10"},{id:"2",name:"11"},{id:"3",name:"12"},{id:"4",name:"13"},{id:"5",name:"14"},{id:"7",name:"15"}];
  
  public getReleaseData(dt) {
    debugger
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
  debugger
  var print;
     var result=this.Release.filter(x => x.id==id && x.detail.fromTime==hour);
    if(result.length>0)
     print=result[0].name
  
return print;
}
  
}
