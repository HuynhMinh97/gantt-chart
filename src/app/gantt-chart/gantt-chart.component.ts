import {AfterViewInit, Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export interface TableUser{
  id:number;
  nameProject?:string;
  nameEmpolyee:string;
  dateFrom:number;
  dateTo:number;
  dateLeft?:number;
  capacity:number;
};

const USER_DATA:TableUser[]=[
  {id:1.1,nameProject:"Pj A",nameEmpolyee:"A",dateFrom:1655312400000, dateTo: 1655571600000,capacity:20},
  {id:1.2,nameProject:"Pj A",nameEmpolyee:"B",dateFrom:1655398800000, dateTo: 
  1658250000000,capacity:20},
  {id:1.3,nameProject:"Pj A",nameEmpolyee:"C",dateFrom:1655226000000, dateTo: 1655485200000,capacity:20},
  {id:1.4,nameProject:"Pj A",nameEmpolyee:"D",dateFrom:1655312400000, dateTo: 1655571600000,capacity:20},
  {id:1.4,nameProject:"Pj A",nameEmpolyee:"E",dateFrom:1650042000000, dateTo: 1655571600000,capacity:40},

]

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})


export class GanttChartComponent implements OnInit{
  constructor(private elementRef:ElementRef){

  }
  faCoffee = faPlusCircle;

  today=new Date();
  ngOnInit(): void {
    
    window.onload=()=>{
      console.log("ONLOAD");
      
    };
    
    document.querySelector(`.table-work-${0}`)?.setAttribute('style','background-color:red;width:50px');
    
    for(var date in this.dataSource)
    {
    this.getMonth(this.dataSource[date].dateFrom.toString())
    }
  }
  

  rs:TableUser[]=[];
  displayedColumns: string[] = ['name project', 'name empolyee', 'date from', 'date to','capacity'];
  test=USER_DATA.map(ele=>{
    let dateObjFrom=new Date(ele.dateFrom);
    let dateObjTo=new Date(ele.dateTo);
    // let newdateFrom = dateObjFrom.getUTCMonth()+"/" + dateObjFrom.getUTCDate()+"/"+dateObjFrom.getUTCFullYear(); 
    // let newdateTo = dateObjTo.getUTCMonth()+"/" + dateObjTo.getUTCDate()+"/"+dateObjTo.getUTCFullYear();
    // ele.dateFrom=newdateFrom;
    // ele.dateTo=newdateTo;
    ele.dateLeft=(ele.dateTo-ele.dateFrom)/(1000 * 3600 * 24)
    return ele
  })
  dataSource = USER_DATA;

  months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  attrEle=document.getElementsByClassName('cell-month-title-0')
  
  // log(param:any) {
  //   // document.querySelector(".table-work-0")?.setAttribute('style','background-color:red;width:50px');
  //   // document.querySelector(".table-work-1")?.setAttribute('style','background-color:red;width:50px');
  //   // document.querySelector(".table-work-2")?.setAttribute('style','background-color:red;width:50px');
  //   // document.querySelector(".table-work-3")?.setAttribute('style','background-color:red;width:50px');
  //   console.log(this.getNumberOfDays(2022,1));
  //   console.log(12)
  // }
  dateText:any;
  handleChange(param:any){
    console.log(typeof param.target.value);
  }

  getNumberOfDays(year:number, month:number) {
    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
// ngDoCheck(){
//   // document.querySelector(".table-work-0")?.setAttribute('style','background-color:red;width:50px');
//   console.log(document.querySelector(".table-work-0")?.attributes);
//   for(var date in this.dataSource)
//   {
//    this.getMonth(this.dataSource[date].dateFrom.toString())
//   }
// 

check:any;
ngDoCheck(){
  for(var index in this.dataSource)
  {
    let day=new Date(this.dataSource[index].dateFrom).getDate();
    let dayLeft=this.dataSource[index].dateLeft;
    let month=new Date(this.dataSource[index].dateFrom).getMonth();
    let year=new Date(this.dataSource[index].dateFrom).getFullYear();
    let ele=document.getElementById(`cell-month-title-${month}`);
    let percentCell=Math.round((day/this.getNumberOfDays(year,month))*ele?.offsetWidth!);
    let percentCellLeft=Math.round((dayLeft!/this.getNumberOfDays(year,month))*ele?.offsetWidth!);
    let eleDiv=document.getElementById(`table-work-${index}`);
    let eleDivLeft=ele?.offsetLeft!+percentCell;
    let eleDivWidth=percentCellLeft;
    // if(eleDiv!=undefined)
    // {
    //   eleDiv.style.marginLeft =eleDivLeft.toString() +"px";
    //   eleDiv.style.width=percentCellLeft.toString() +"px";
    //   console.log(eleDiv.style.left)
    // }
    eleDiv?.setAttribute('style',`margin-left: ${eleDivLeft}px;width:${eleDivWidth.toString()}px;background-color:#49BBEE`);
    // document.getElementById(`table-work-${index}`)?.setAttribute('style','background-color:red');
    // document.getElementById(`table-work-${index}`)?.setAttribute('style',`width:10 px`);

  }
  // for(let i=0;i <tableTitleMonth.length;i++)
  // {
  //   console.log(i,tableTitleMonth[i].offsetWidth)
  // }
}

// load function contenteditable
loadContenteditable(){
  
}


randColor(length:number, ...ranges:any[]) {
  var str = "";                                                       // the string (initialized to "")
  while(length--) {                                                   // repeat this length of times
    var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
    var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
        max = ranges[ind][1].charCodeAt(0);                           // get the maximum char code allowed for this range
    var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
    str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
  }
  return str;                                                         // return str
}
getMonth(date:string){
  let m=date.slice(0,date.indexOf('/'))
  console.log(m)
}

ngAfterViewInit() {
  this.elementRef.nativeElement.querySelector('#datefrom-left-0')?.addEventListener('blur', this.onClick.bind(this));
}
onClick(event:any) {
  console.log(event.target.innerText,event);
}

isShowPlus:boolean=false;
handleHover(value:any){
  value.target.setAttribute('style','cursor: pointer;background-color:rgba(108,117,125,0.3)');
  value.target.children[0].children[0].setAttribute('style','display:block')

  this.isShowPlus=true;
}
handleHoverOut(value:any){
  value.target.setAttribute('style','background-color:none');
  value.target.children[0].children[0].setAttribute('style','display:none')
  this.isShowPlus=false;
  console.log(value)
}
////test


// name:string='';
// filterStatus:string='XEM_TAT_CA';
// isShow=true;
// isHightlight=true;
// currentStyle={color:'red',fontSize:'30px'}
// arrWords = [
//   { id: 1, en: 'action', vn: 'hành động', memorized: true },
//   { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
//   { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
//   { id: 4, en: 'active', vn: 'chủ động', memorized: true },
//   { id: 5, en: 'bath', vn: 'tắm', memorized: false },
//   { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
// ];
// vn:string='';
// en:string='';
// handleSubmit():void{
//   if(this.vn==''||this.en=='')
//   {
//     alert("Chưa có dữ liệu");
//   }else{
//     let m={id:this.arrWords.length+1,en:this.en,vn:this.vn,memorized:true};
//     this.arrWords.push(m);
//     this.vn='';
//     this.en='';
//   }
  
//   this.isShow=!this.isShow;
// }
// styleDiv={width:300+'px',height:100+'px',backgroundColor:'rgb(159 137 137 / 15%',marginBottom:10+'px'};
// handleDelete(id:number){
//   const index=this.arrWords.findIndex(word=>word.id==id)
//   this.arrWords.splice(index,1);
// }

// handleSelect(memorized:boolean){
//   const xemAll=this.filterStatus=='XEM_TAT_CA';
//   const xemNho=this.filterStatus=='NHO' && memorized;
//   const xemChuaNho=this.filterStatus=='CHUA_NHO' && !memorized;
//   return xemAll||xemNho||xemChuaNho;
// }

}
