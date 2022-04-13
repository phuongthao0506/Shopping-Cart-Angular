import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../assets/data/products.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  products: any = (data as any).default;
  key: string = '';
  brand: string = '';
  rom: string = '';
  ram: string = '';
  camera: string = '';
  typeSort: string = '';   //desc giam dan 
  keySort:string=''
  value:string=''

 
  keyword: string = '';
 
  isLogin: boolean = false;
  constructor(private router: Router) {
    this.isLogin = !!localStorage.getItem('token');
  }
  ngOnInit(): void {

    
  }

  change(){
    console.log(333,this.value);
    let arrStr = this.value.split(',');
    this.keySort =arrStr[0]
    this.typeSort =arrStr[1]

    console.log(333,this.value,arrStr);
    

    
  }
  allProduct() {
    this.key = ''
    this.keyword=''
  }
  logout(){
    localStorage.removeItem("token");
    this.isLogin = false;
  }
  search(){
this.key = this.keyword
  }
  filterName(brand:string){
    this.key = brand
    
  }
  
}
