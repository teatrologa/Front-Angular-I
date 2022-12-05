import { Component, Input, OnInit } from '@angular/core';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{

  @Input() public addressData!: AddressSectionData;
  
  constructor() { }

  ngOnInit() { }
  // Metodo do ciclo de vida de um componenete (ainda não estudado)
}
