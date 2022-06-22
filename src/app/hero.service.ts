import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';

export interface Product{
  id:number;
  name:string;
  price: number;
  quantity: number;
  img: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
