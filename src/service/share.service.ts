import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    user:any
    currentProfile:any;
    constructor() { }
    setUser(value){
        this.user=value
        console.log(this.user);
    }
    getUser(){
        return this.user;
    }
    setCurrentProfile(value){
        this.currentProfile=value
    }
    getCurrentProfile(){
        return this.currentProfile;
        console.log(this.currentProfile)
    }
}