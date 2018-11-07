import { Component } from '@angular/core';
import { Address } from 'src/app/domain/address';
import { AddressService } from 'src/app/core/address.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent  {

  public postcode: string;
  addresses: Address[];
  constructor(private addressService: AddressService) { }

  search() {
    this.addressService.findByPostcode(this.postcode).subscribe(addresses => this.addresses = addresses);
  }

}
