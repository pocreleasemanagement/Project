import { Component } from '@angular/core';
import { DataTableResource } from 'angular-2-data-table';
import persons from '../data/data';
import {RemoteService} from './data-table-demo1-remote-service';
import { MdDialog, OVERLAY_PROVIDERS,
     ScrollDispatcher, Platform, ScrollStrategyOptions, MdDialogRef } from '@angular/material';
import { NewReleaseRequestComponent } from '../partialComponents/new-release-request/new-release-request.component';

@Component({
  selector: 'app-releaseboard',
  templateUrl: './releaseboard.component.html',
  styleUrls: ['./releaseboard.component.css'],
  providers : [RemoteService, MdDialog,
     OVERLAY_PROVIDERS, ScrollDispatcher, Platform,
    ScrollStrategyOptions ],
})

export class ReleaseboardComponent {
    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor(private remoteService: RemoteService, private dialog: MdDialog) {
         this.itemResource.count().then(count => this.itemCount = count);
    }

    openDialog() {
        const dialogRef = this.dialog.open(NewReleaseRequestComponent);
        dialogRef.afterClosed().subscribe(result => {
            // tslint:disable-next-line:no-debugger
            debugger;
            this.reloadItemsFromService(null);
        });
    }
    reloadItemsFromService(params) {
                 this.remoteService.queryReleases(params).then(result => {
            this.items = result.items;
            this.itemCount = result.count;
        });
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
}
