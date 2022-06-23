import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipservice } from './ip.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'timeLine';
  // ip:string='';
  // rs:any;
  // constructor(private ipService:Ipservice){
    
    @ViewChild('cell-month-title-0') elementView: ElementRef | undefined;
    
    constructor() { }
  
    ngAfterViewInit() {
      console.log(this.elementView?.nativeElement);
    }  
  // }
  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    
  }
  

 
}
