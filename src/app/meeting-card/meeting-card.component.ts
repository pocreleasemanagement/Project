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
    //     let timer = Observable.timer(2000,1000);
    // timer.subscribe(t => this.tickerFunc(t));

  }
  tickerFunc(tick){
    console.log(this);
         this.test.forEach(element => {
                   this.totcount=this.test.length;

           debugger

           if(element.cnt==this.counter)
            {
              element.active1="active";
              if (element.cnt<this.totcount-1)
             element.cnt=element.cnt+1;
              else if(element.cnt>this.totcount-1)
             element.cnt=element.cnt-1;
            
            }
            else
              {
              element.active1="";
                if (element.cnt<this.totcount-1)
             element.cnt=element.cnt+1;
             else if(element.cnt>this.totcount-1)
             element.cnt=element.cnt-1;

          
              }
         });
    this.counter=this.counter+1;
    this.ticks = tick
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