import { Component } from '@angular/core';
import { RemoteService } from './data-table-demo1-remote-service';


@Component({
    selector: 'app-data-table-demo-1-remote',
    providers: [RemoteService],
    templateUrl: './releaseboard.component.html',
    styleUrls: ['./releaseboard.component.css']
})

export class DataTableDemo1RemoteComponent {

    items = [];
    itemCount = 0;

    constructor(private remoteService: RemoteService) {}

    reloadItems(params) {
        this.remoteService.queryReleases(params).then(result => {
            this.items = result.items;
            this.itemCount = result.count;
        });
    }
}
