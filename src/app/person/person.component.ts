import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() nameUser:string | undefined;
  @Input() age:number | undefined;

  @Output() delete = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  hanldeDelete(){
    this.delete.emit(this.nameUser);
  }
}
