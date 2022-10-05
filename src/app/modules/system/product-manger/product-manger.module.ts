import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductMangerModule { }
