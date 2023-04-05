import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  title = 'Forms-Strak';
  clienteForm: FormGroup;
  

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),

    ]
  );


  apellidoControl = new FormControl(
    '',
    [
      Validators.required,
    ]
  )
  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(10),
    ]
  )




  constructor() {
    this.clienteForm = new FormGroup ({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    })
  }


  onSubmit(): void{
  
    if(this.clienteForm.valid){
      console.log(this.clienteForm.value)
    } else {
      alert ('no es valido');
    } 
  }
}
