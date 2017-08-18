import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.dashboard.html',
  styleUrls: ['./app.dashboard.css']
})
export class AppDashboard {
  WeekDay:any;
  Time:any;
  Release:any;
  test:any;
  counter=0;

  onClick(): void {
   this.counter=this.counter+7;
   this.getNext(moment().add('days',this.counter).format("YYYY-MM-DD"));
  }

   constructor(private _myService: DataServiceService) { 
         this.WeekDay=this._myService.getWeekDay();
           var dt=moment().format("YYYY-MM-DD");
         this.getNext(dt);
   }
  
   public getNext(dt){
               this._myService.getReleaseData(dt).subscribe(
      (respose) => {
       this.Time=[];
        var day= moment().day();
        this.test = respose;
        var cnt=1;
        this.Release=[];
           this.Time=[];
         this.test.forEach(element => {
          if (this.Release.length==0){
              this.Release=[{id: moment(element.ReleaseStartDate).day(),name:element.Summary,ReleaseDt:element.ReleaseStartDate,detail:{fromTime:moment(element.ReleaseStartDate).format("HH"),totime:11}}];
          }
          else
              {
              this.Release.push({id: moment(element.ReleaseStartDate).day(),name:element.Summary,ReleaseDt:element.ReleaseStartDate,detail:{fromTime:moment(element.ReleaseStartDate).format("HH"),totime:11}});
              this.Time.push({id:cnt.toString(),name:moment(element.ReleaseStartDate).format("HH")});
              }
          cnt++;
         });
        this._myService.Release=this.Release;
  var fromtm = this.Release.map(data => data.detail.fromTime).sort();
  var timecnt=1;
  this.Time=[];
  var endValue=fromtm[fromtm.length-1];
  var startValue=fromtm[0];
  for(let i = startValue; i <= endValue; ++i) {
               var test="0"+i.toString();

     if (this.Time.length==0)
         {
          this.Time=[{id:timecnt.toString(),name:test.substring(test.length-2,3)}];

         }
        else
          {
           this.Time.push({id:timecnt.toString(),name:test.substring(test.length-2,3)}); 

          }
                timecnt++;

    } 
    return this.Time;
   },
      (error) => {
        console.log(error.json());
      }
      
    );
   }
   public getTimeDetail(id,hour){
      let releaseName: string = this._myService.getTimeDetail(id,hour);
     let isAvail = false;
     if (releaseName != null) {
     isAvail = true;
     }
      return { 'releaseName': releaseName, 'isAvail': isAvail };
   }

     public getCount(id,hour){
      let releaseName: string = this._myService.getTimeDetail(id,hour);
     let isAvail = false;
     if (releaseName != null) {
     isAvail = true;
     }
      return { 'releaseName': releaseName, 'isAvail': isAvail };
   }
  ngOnInit() {

  }
}
