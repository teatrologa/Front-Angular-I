import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public btnDisabled = true;

  ngOnInit(){
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log("Formulário Enviado!"); 
  }

  public showInputData(e: any): void {
    console.log("Email: " + e.target.value);
  }

}
