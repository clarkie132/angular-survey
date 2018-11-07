import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../survey/survey';
import { Address } from '../domain/address';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../core/address.service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.css']
})
export class SurveyResultsComponent implements OnInit {
  address: Address;

  surveys: Survey[] = [
    {
      type: 'RICS HomeBuyer Report',
      description:
       `A HomeBuyer Report is a survey suitable for conventional properties in reasonable condition. Costs start at £400 on average.
       This will help you find out if there are any structural problems, such as subsidence or damp,
       as well as any other unwelcome hidden issues inside and outside.

       The HomeBuyer Report doesn’t look beyond the floorboards or behind the walls.

      Some home-buyers’ reports include a property valuation,
      so you might be able to revise your offer if the survey reveals a lower price than the mortgage lender’s valuation.

      If there’s no valuation included, you could use the report’s suggestions for repairs to renegotiate the price.

      For example, if it’s going to cost you £5,000 to carry out work on the property’s damp walls,
      it’s reasonable to offer £5,000 less than the asking price.`,
      link: 'assets/surveys/homebuyer-report-example.pdf'
    },
    {
      type: 'RICS Building Survey',
      description:
       `The RICS Building Survey provides the same level of in-depth inspection as a building survey,
       but uses a simple a clear presentation style and a 1, 2, 3 rating system to ensure that you
       can easily identify the most serious issues.
       This is mainly aimed at larger or older properties, or if you’re planning major works.

       A detailed report provides you with an in-depth analysis of the property’s
       condition highlighting a range of issues which includes advice on defects,
       repairs and maintenance options. Included with the RICS Building Survey are
       advice sheets on how to deal with some of the more common problems that have
       been found at the property including an outline of repair options and the
       consequences of not dealing with any potential issues highlighted within the
       report.

       The typical cost is around £400-£500.

       Building or full structural survey
       This is the most comprehensive survey and is suitable for all residential properties.
       It’s particularly good for older homes or homes that might need repairs.
       This type of survey typically costs upwards of £600 and provides detailed advice on repairs.

       It’s very extensive and in some circumstances worth the extra money but it does
       not usually include a valuation. Although this survey can’t look under floorboards or behind
       walls it should include the surveyor’s opinion on the potential for hidden defects in this area.

       The surveyor should also provide information on potential repair options.
       Again, you could try to save money by comparing the details of the repairs
       required against the lender’s valuation.`,
       link: 'assets/surveys/building-surveying-example.pdf'
    }
  ];
  constructor(private route: ActivatedRoute, private addressService: AddressService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.addressService.get(+params['id']).subscribe(address => this.address = address); // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}
