import { Component, OnInit ,Input} from '@angular/core';
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
  ngOnInit() {
    this.getTimeDetail();
  }
  public getTimeDetail(){
    debugger
    // this.test=[{releaseName:'test',color:'yellow',active:'active'},{releaseName:'test2',color:'green',active:''}];
  
      var result = this._myService.getTimeDetail(this.parentID,this.timeName);
      if (result!=null){
     result.forEach(element => {
        if(this.test==null) {
     this.test=[{releaseName:element.name,color:'yellow',active1:'active'}];
  
        }
    else
      {
          this.test.push({releaseName:element.name,color:'green',active1:''});
  
      }
        
      });
     
      }
 
   }
}