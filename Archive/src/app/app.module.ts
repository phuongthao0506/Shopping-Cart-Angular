import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/page/info/info.component';
import { PromotionComponent } from './components/page/promotion/promotion.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { DetailPhoneComponent } from './components/page/detail-phone/detail-phone.component';
import { CheckoutComponent } from './components/page/checkout/checkout/checkout.component';
import { HeaderCheckoutComponent } from './components/page/checkout/header-checkout/header-checkout.component';
import { AllProductComponent } from './components/page/home/all-product/all-product.component';
import { HomeInfoComponent } from './components/page/home/home-info/home-info.component';
import { SaleComponent } from './components/page/home/sale/sale.component';
import { HomeComponent } from './components/page/home/home/home.component';

import { BannerComponent } from './components/page/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/page/home/home/login/login.component';
import { RegisterComponent } from './components/page/home/home/register/register.component';
import { ProfileComponent } from './components/page/home/home/profile/profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgpSortModule } from 'ngp-sort-pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { HoverDirective } from './directive/hover.directive';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    InfoComponent,
    PromotionComponent,
    ContactComponent,
    DetailPhoneComponent,
    CheckoutComponent,
    HeaderCheckoutComponent,
    AllProductComponent,
    HomeInfoComponent,
    SaleComponent,
    HomeComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchFilterPipe,
    FilterSearchPipe,
    HoverDirective,
    
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
    NgpSortModule




  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
