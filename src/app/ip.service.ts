import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()

export class Ipservice{
    constructor(private http:HttpClient){
        
    }
    results:any;
    getIp(){
        return this.http.get('https://api.github.com/users/hadley/orgs')
        .toPromise()
        
    }
    
    
        
        

    }
    
    
