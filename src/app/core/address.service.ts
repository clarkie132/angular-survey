import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from '../domain/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addresses: Address[] = [
    {
      id: 1,
      line1: '3 Library Street',
      city: 'Cardiff',
      postcode: 'CF5 1QD'
    },
    {
      id: 2,
      line1: '4 Library Street',
      city: 'Cardiff',
      postcode: 'CF5 1QD'
    },
    {
      id: 3,
      line1: '5 Library Street',
      city: 'Cardiff',
      postcode: 'CF5 1QD'
    },
    {
      id: 4,
      line1: '6 Library Street',
      city: 'Cardiff',
      postcode: 'CF5 1QD'
    },
    {
      id: 5,
      line1: '7 Library Street',
      city: 'Cardiff',
      postcode: 'CF5 1QD'
    }
  ];

  constructor() { }

  public  get (id: number): Observable<Address> {
    return of(this.addresses.find(address => address.id === id));
  }


  public findByPostcode (postcode: string): Observable<Address[]>  {
    return of(this.addresses);
  }
}
