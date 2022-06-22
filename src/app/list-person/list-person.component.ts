import { Component, OnInit } from '@angular/core';

export interface Person{
  id:number,
  name:string,
  age:number,
  address?:string,
}


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})


export class ListPersonComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  listPerson:Person[]=[
    {
      id:1,
      name:'Teo',
      age:12,
      address:'Ha Noi'
    },
    {
      id:2,
      name:'Ti',
      age:10,
      address:'TP HCM'
    },
    {
      id:3,
      name:'Tun',
      age:9,
      address:'Da Nang',
    },
  ]

  handleDelete(name:string){
    const index= this.listPerson.findIndex(ele=>ele.name==name);
    console.log(index)
    this.listPerson.splice(index,1);
  }

}
