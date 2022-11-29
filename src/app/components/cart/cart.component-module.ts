import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatCheckboxModule, CommonModule, MatButtonModule, MatInputModule, MatDatepickerModule],
  declarations: [CartComponent],
  providers: [],
  exports: [CartComponent]
})
export class CartComponentModule {
}
