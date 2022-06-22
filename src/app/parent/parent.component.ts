import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  @ViewChild(ChildComponent) viewChild!:ChildComponent;
  handleAdd(){
    this.viewChild.value+=1;
  }
  
}
