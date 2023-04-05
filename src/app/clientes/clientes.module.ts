import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from '../shared/components/form-error-helper/form-error-helper.module';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }