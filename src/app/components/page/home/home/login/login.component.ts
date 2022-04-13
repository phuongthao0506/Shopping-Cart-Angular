import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../../service/notification.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  isSubmit: boolean = false;
  valueUser = localStorage.getItem('User');
  isLogin: boolean = false;
  constructor(
    private notifyService: NotificationService,
    private router: Router
  ) {
    if(!!localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }
  initForm() {
    this.loginForm = new FormGroup({
      phone: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(8),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  ngOnInit(): void {
    this.initForm();

  }
  onSubmit() {
    this.isSubmit = true;
    if (this.loginForm.invalid) {
      this.notifyService.showError(
        'Bạn vui lòng kiểm tra lại thông tin đăng ký',
        'THÔNG TIN KHÔNG HỢP LỆ !'
      );
    } else {
      if (this.valueUser) {
        let user = JSON.parse(this.valueUser);
        console.log(333,user);
        if (
          this.loginForm.controls.phone.value == user.phone &&
          this.loginForm.controls.password.value == user.password
        ) {
          let token = (new Date()).getTime();
          localStorage.setItem('token',JSON.stringify(token))
          this.router.navigate(['home']);
        } else {
          Swal.fire({
            icon: 'error',
        
            text:    'Số điện thoại hoặc mật khẩu không đúng',  
          });
        }
      }else{
        Swal.fire({
          icon: 'error',
         text:'Số điện thoại chưa đăng ký',   
        });
      }
    }
  }
}
