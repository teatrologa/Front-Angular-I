import { Component, OnInit } from '@angular/core';
import { ContactFormData } from 'src/app/models/contact-form-data.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public btnDisabled = true;
  public formData: ContactFormData = {
    email: "",
    message: ""
  }

  ngOnInit(){
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log("Formulário Enviado!");
    console.log(this.formData); 
  }

  public showInputData(e: any): void {
    console.log("Email: " + e.target.value);
  }

}
