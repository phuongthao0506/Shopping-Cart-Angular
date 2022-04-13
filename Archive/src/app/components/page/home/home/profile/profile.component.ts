import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) {
    if (!!!localStorage.getItem('token')) {
      this.router.navigate(['home']);
    } else {
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
}
