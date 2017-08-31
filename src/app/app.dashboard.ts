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
    debugger
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
           debugger
            let itemIndex = this.WeekDay.findIndex(item => item.id ==  moment(element.ReleaseStartDate).day());
          if (this.Release.length==0){
              this.Release=[{id: moment(element.ReleaseStartDate).day(),status:element.Status,name:element.Summary,ReleaseDt:element.ReleaseStartDate,detail:{fromTime:moment(element.ReleaseStartDate).format("HH"),totime:11}}];
              this.WeekDay[itemIndex].dt = moment(element.ReleaseStartDate).format("DD-MM-YYYY");
          }
          else
              {
              this.Release.push({id: moment(element.ReleaseStartDate).day(),status:element.Status,name:element.Summary,ReleaseDt:element.ReleaseStartDate,detail:{fromTime:moment(element.ReleaseStartDate).format("HH"),totime:11}});
              this.Time.push({id:cnt.toString(),name:moment(element.ReleaseStartDate).format("HH")});
              }
           
          this.WeekDay[itemIndex].dt = moment(element.ReleaseStartDate).format("DD-MM-YYYY");
          cnt++;
         });
        this._myService.Release=this.Release;
  var fromtm = this.Release.map(data => data.detail.fromTime).sort();
  var timecnt=1;
  this.Time=[];
  var endValue=fromtm[fromtm.length-1];
  var startValue=fromtm[0];
  debugger
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
     var result = this._myService.getTimeDetail(id,hour);
     debugger
     var output=[];
              result.forEach(element => {
                if (output.length==0)
                  output=[{releaseName:element.name,class:'active',color:'yellow',status:element.status,isAvail:true,ReleaseDt:element.ReleaseDt}];
                else
                output.push({releaseName:element.name,class:'',color:'red',status:element.status,isAvail:true,ReleaseDt:element.ReleaseDt});

              });
              return output;
    }

     public getCount(id){
      let releaseCount = this._myService.getCount(id);
     
      return releaseCount;
   }
  ngOnInit() {

  }
}
