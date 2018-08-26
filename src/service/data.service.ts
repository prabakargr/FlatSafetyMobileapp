import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DataService {

    newMaintenace:any;
    profile:any;

    constructor(
        private http:Http,
    ) { }


    createMaintenance(value){
        return this.http.post('http://fierce-inlet-19946.herokuapp.com/maintenace/createManitenance',value)
        .map(result=>this.newMaintenace=result.json())
    }
    createProfile(value){
        return this.http.post('http://fierce-inlet-19946.herokuapp.com/flatUsers/createProfile',value)
        .map(result=>this.profile=result.json())
    }
}