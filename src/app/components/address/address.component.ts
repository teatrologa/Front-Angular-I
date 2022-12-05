import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{

  @Input() public addressData!: AddressSectionData;
  
  constructor() { }

  @Output() public getAddressData: EventEmitter<AddressData> = new EventEmitter<AddressData>();

  public getAddress(): void {
    this.getAddressData.emit(this.addressData.data);
  }

  ngOnInit(){
    this.getAddressData.emit(this.addressData.data);
  }
  // Metodo do ciclo de vida de um componenete (ainda não estudado)
}
