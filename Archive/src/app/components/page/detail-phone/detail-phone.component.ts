import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  *  as  data  from  '../../../../assets/data/products.json'

@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.scss']
})
export class DetailPhoneComponent implements OnInit {
  product:any
  id:any
  products: any = (data as any).default;
  constructor(  private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }



   ngOnInit(){  
    this.products.forEach((i:any) => {
      if(i.maSP == this.id) {
        this.product = i;
      }
    }) 
   
    
  
    
     
   }
   
}
