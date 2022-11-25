import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserFormComponent} from './components/user-form/user-form.component';
import {UserFormComponentModule} from './components/user-form/user-form.component-module';
import {UsersServiceModule} from './services/users.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'create-user-with-role',
    component: UserFormComponent
  }]), UserFormComponentModule, UsersServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
