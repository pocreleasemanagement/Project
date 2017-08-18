import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { DataTableParams } from 'angular-2-data-table';
import 'rxjs/add/operator/toPromise';


const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://releasemanagementapi.azurewebsites.net/api/';

function paramsToQueryString(params: DataTableParams) {
    const result = [];

    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }

    return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class RemoteService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http) {}

    queryReleases(params: DataTableParams) {
        return this.http.get(BASE_URL + '/release?' + paramsToQueryString(params)).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }

    insertNewRelease(body: any) {
        return this.http.post(BASE_URL + '/release',  body, {headers : this.headers}).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }
}
