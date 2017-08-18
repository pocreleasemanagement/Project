import { Component, OnInit } from '@angular/core';
import { MdDialogContainer, MdDialog, MdDialogRef } from '@angular/material';
import { ReleaseRequest } from '../../models/releaserequest';
import {RemoteService} from '../../releaseboard/data-table-demo1-remote-service';

@Component({
  selector: 'app-new-release-request',
  templateUrl: './new-release-request.component.html',
  styleUrls: ['./new-release-request.component.css'],
  providers : [MdDialogContainer]
})
export class NewReleaseRequestComponent implements OnInit {

 deploymentTime= {hour: 10, minute: 10 };
testingTime= {hour: 10, minute: 10 };
  // tslint:disable-next-line:max-line-length
  model = new ReleaseRequest('', 'asdsa', 'testtest', new Date(), new Date(), '', '', this.deploymentTime, this.testingTime, '', 132, 3232, '');
  submitted = false;

  // tslint:disable-next-line:max-line-length
  constructor(private mdcontainer: MdDialogContainer, private dialog: MdDialog, private service: RemoteService,
     public dialogRef: MdDialogRef<NewReleaseRequestComponent>) {
  }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    alert('submitted');
    this.model.DeploymentTime = this.deploymentTime.hour + ':' + this.deploymentTime.minute;
    this.model.TestingTime = this.testingTime.hour + ':' + this.testingTime.minute;
    this.service.insertNewRelease(JSON.stringify(this.model));
    this.closeForm();
}

  closeForm() { this.dialog.closeAll(); }
  get diagnostic() { return JSON.stringify(this.model); }
}
