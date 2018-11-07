import { Component, Input } from '@angular/core';
import { Address } from '../../domain/address';
import { Observable } from 'rxjs';
import { AddressService } from 'src/app/core/address.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent  {


  @Input() addresses: Address[];
  constructor() {}
}
