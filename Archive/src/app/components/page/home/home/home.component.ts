import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../../../../assets/data/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  products: any = (data as any).default;
  ngOnInit(){
  }
}
