import { Component, OnInit ,Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.css']
})
export class MeetingCardComponent implements OnInit {
@Input() parentID: string;
@Input() timeName: string;
  constructor(private _myService: DataServiceService) { }
public test:any;
  ticks =0;
  public totcount=0;
public counter=1;
  ngOnInit() {
    this.getTimeDetail();
        let timer = Observable.timer(2000,1000);
  timer.subscribe(t => this.tickerFunc(t));

  }
  tickerFunc(tick){
    console.log(this);
      var dd=0;
      var cc=0;
       var tot;
         this.test.forEach(element => {
                   tot=this.test.length;
           cc++;
           if(element.active1=="active")
            {
              dd=cc;
              element.active1="";
            }
         });
    if (dd==0)
    this.test[0].active1="active";
      if(tot>dd)
      this.test[dd-1+1].active1="active";
     if(tot==dd)
       this.test[0].active1="active";
    this.ticks = tick
  }
  isActive(url: string) {
        return url === this.test[0];
    }
  public getTimeDetail(){
    // this.test=[{releaseName:'test',color:'yellow',active:'active'},{releaseName:'test2',color:'green',active:''}];
     var cnt=0;
      var result = this._myService.getTimeDetail(this.parentID,this.timeName);
      if (result!=null){
     result.forEach(element => {
       
        if(this.test==null) {

     this.test=[{releaseName:element.name,color:'yellow',active1:'active',cnt:0}];
  
        }
    else
      {
        cnt++;
        var colour='green';
         if (element.status=="Inprogress")
         colour='red';
          this.test.push({releaseName:element.name,color:colour,active1:'',cnt:cnt});
  
      }
        
      });
     
      }
 
   }
}