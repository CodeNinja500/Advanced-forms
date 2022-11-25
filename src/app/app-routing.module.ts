import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { UserFormComponentModule } from './components/user-form/user-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { JobPostComponentModule } from './components/job-post/job-post.component-module';
import { JobsServiceModule } from './services/jobs.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-user-with-role', component: UserFormComponent }, { path: 'create-job', component: JobPostComponent }]), UserFormComponentModule, UsersServiceModule, JobPostComponentModule, JobsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
