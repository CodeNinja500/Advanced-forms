import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { CartComponent } from './components/cart/cart.component';
import { UserFormComponentModule } from './components/user-form/user-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { JobPostComponentModule } from './components/job-post/job-post.component-module';
import { JobsServiceModule } from './services/jobs.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import {CartsServiceModule} from "./services/carts.service-module";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-user-with-role', component: UserFormComponent }, { path: 'create-job', component: JobPostComponent }, { path: ':userid/cart', component: CartComponent }]), UserFormComponentModule, UsersServiceModule, JobPostComponentModule, JobsServiceModule, CartComponentModule, ProductsServiceModule, CartsServiceModule, MatNativeDateModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
