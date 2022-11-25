import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { JobPostComponent } from './job-post.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatListModule],
  declarations: [JobPostComponent],
  providers: [],
  exports: [JobPostComponent]
})
export class JobPostComponentModule {
}
