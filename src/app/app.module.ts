import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormErrorHelperComponent } from './shared/components/form-error-helper/form-error-helper.component';
import { ClientesModule } from './clientes/clientes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
