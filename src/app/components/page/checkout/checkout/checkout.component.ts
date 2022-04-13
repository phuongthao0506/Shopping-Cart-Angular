import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import * as data from '../../../../../assets/data/products.json';
import { NotificationService } from '../../../../service/notification.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  user:User= new User;
  product: any;
  id: any;
  products: any = (data as any).default;

  customerForm: FormGroup | any;
  isSubmit: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private notifyService: NotificationService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (!!localStorage.getItem('token')) {
      let valueUser = localStorage.getItem('User');
      if (valueUser) {
        this.user = JSON.parse(valueUser);
        console.log(333, this.user);
      }
    }
  }
  initForm() {
    // Form nhập vào
    this.customerForm = new FormGroup({
      fullName: new FormControl(this.user.fullName, [Validators.required]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(8),
      ]),
      mail: new FormControl(this.user.mail, [Validators.required, Validators.email]),
      address: new FormControl(this.user.address, [Validators.required]),
    });
  }

  ngOnInit() {
    this.initForm();
    this.products.forEach((i: any) => {
      if (i.maSP == this.id) {
        this.product = i;
      }
    });
  }
  showInfoSuccess = (
    fullName: any,
    phone: any,
    email: any,
    address: any,
    product: any,
    total: any
  ) => {
    let html = `<div class="mx-4">
        <table class="table text-left" style="font-size: 15px;text-align: left;">
            <tr>
                <th>Họ tên: </th>
                <td>${fullName} </td>
            </tr>
            <tr>
                <th>Số điện thoại: </th>
                <td>${phone} </td>
            </tr>
            <tr>
                <th>Email: </th>
                <td>${email} </td>
            </tr>
            <tr>
                <th>Địa chỉ: </th>
                <td>${address}</td>
            </tr>
            <tr>
                <th>Sản phẩm : </th>
                <td class="text-primary">${product}</td>
            </tr>
            <tr>
            <th>Thành tiền: </th>
            <td class="text-danger">${new Intl.NumberFormat().format(
              total
            )} VND</td>
        </tr>
        </table>
        </div>`;

    return html;
  };
  onSubmit() {
    this.isSubmit = true;
    if (this.customerForm.invalid) {
      this.notifyService.showError(
        'Bạn vui lòng kiểm tra lại thông tin giao hàng',
        'THÔNG TIN KHÔNG HỢP LỆ !'
      );
    } else {
      
        let customer = new Customer(
          this.customerForm.controls.fullName.value,
          this.customerForm.controls.address.value,
          this.customerForm.controls.mail.value,
          this.customerForm.controls.phone.value
        );
        let productOder = {
          nameproduct: this.product.tenSP,
          price: this.product.giaBan,
        };
        let oder = { ...customer, ...productOder };
        localStorage.setItem('Oder', JSON.stringify(oder));
  
        Swal.fire({
          icon: 'success',
          title: 'Đặt Hàng Thành Công',
          html: this.showInfoSuccess(
            this.customerForm.controls.fullName.value,
            this.customerForm.controls.phone.value,
            this.customerForm.controls.mail.value,
            this.customerForm.controls.address.value,
            this.product.tenSP,
            this.product.giaBan
          ),
          confirmButtonColor: 'rgb(94 204 102)',
          confirmButtonText: ' <a href="/" class="btn ">Xem thêm sản phẩm !</a>',
          footer: `
          <p> Cảm ơn quý khách đã mua hàng tại Smart Point!!  </p>`,
        });
        // lay gia tri
        console.log('111', oder);
      
       
      
      
    }
  }
}
