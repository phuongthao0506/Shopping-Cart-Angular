import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  user: any;
  constructor(    private router: Router) {
    this.isLogin = !!localStorage.getItem('token');
    if(!!localStorage.getItem('User')){
      let valueUser = localStorage.getItem('User');
      if (valueUser) {
        this.user = JSON.parse(valueUser);
        console.log(333, this.user);
      } else {
        this.router.navigate(['home']);
      }
    }
  }

  ngOnInit(): void {}

  logout(){
    localStorage.removeItem("token");
    this.isLogin = false;
  }

}
