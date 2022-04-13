import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { NotificationService } from '../../../../../service/notification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup | any;
  submit: boolean = false;
  constructor(
    private notifyService: NotificationService,
    private router: Router
  ) {}
  initForm() {
    // Form nhập vào
    this.userForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(8),
      ]),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {
    this.submit = true;
    if (this.userForm.invalid) {
      this.notifyService.showError(
        'Bạn vui lòng kiểm tra lại thông tin đăng ký',
        'THÔNG TIN KHÔNG HỢP LỆ !'
      );
    } else {
      if (!!localStorage.getItem('User')) {    
        let valueUser = localStorage.getItem('User');
        if (valueUser) {
          let user = JSON.parse(valueUser);
          if (user.phone == this.userForm.controls.phone.value) {
         
            Swal.fire({
              icon: 'error',
              text: 'Số điện thoại đã được đăng ký',

              footer: `
            `,
            });
          }else {
            console.log(222);
            let user = new User(
              this.userForm.controls.fullName.value,
              this.userForm.controls.address.value,
              this.userForm.controls.mail.value,
              this.userForm.controls.phone.value,
              this.userForm.controls.password.value,
              this.userForm.controls.userName.value
            );
            localStorage.setItem('User', JSON.stringify(user));
    
            Swal.fire({
              icon: 'success',
              title: 'Đăng Ký Thành Công',
    
              footer: `
              `,
            });
            this.router.navigate(['login']);
          }
        }
      } else {
        console.log(222);
        let user = new User(
          this.userForm.controls.fullName.value,
          this.userForm.controls.address.value,
          this.userForm.controls.mail.value,
          this.userForm.controls.phone.value,
          this.userForm.controls.password.value,
          this.userForm.controls.userName.value
        );
        localStorage.setItem('User', JSON.stringify(user));

        Swal.fire({
          icon: 'success',
          title: 'Đăng Ký Thành Công',

          footer: `
          `,
        });
        this.router.navigate(['login']);
      }
    }
  }
}
