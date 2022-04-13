import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/page/checkout/checkout/checkout.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { DetailPhoneComponent } from './components/page/detail-phone/detail-phone.component';
import { AllProductComponent } from './components/page/home/all-product/all-product.component';
import { HomeComponent } from './components/page/home/home/home.component';
import { LoginComponent } from './components/page/home/home/login/login.component';
import { ProfileComponent } from './components/page/home/home/profile/profile.component';
import { RegisterComponent } from './components/page/home/home/register/register.component';
import { InfoComponent } from './components/page/info/info.component';
import { PromotionComponent } from './components/page/promotion/promotion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: DetailPhoneComponent,
    pathMatch: 'full'
  },{
    path: 'checkout/:id',
    component: CheckoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: InfoComponent,
    pathMatch: 'full'
  },
  {
    path: 'promotion',
    component: PromotionComponent,
    pathMatch: 'full'
  },
  
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },{
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },{
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  
  {
    path: 'allProduct',
    component: AllProductComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
