import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey/survey';

@Component({
  selector: 'app-survey-types',
  templateUrl: './survey-types.component.html',
  styleUrls: ['./survey-types.component.css']
})
export class SurveyTypesComponent implements OnInit {

  surveys: Survey[] = [
    {
      type: 'RICS Condition Report',
      description:
        `The RICS Condition Report describes the condition of the property,
        identifies any risks and potential legal issues and highlights any urgent defects.
        It’s most suitable for new-build and conventional homes in good condition;
        no advice or valuation is provided in this survey.
        A Condition Report is a very basic ‘traffic light’ survey and the cheapest, costing around £250.`
    },
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
      it’s reasonable to offer £5,000 less than the asking price.`
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
       required against the lender’s valuation.`
    },
    {
      type: 'New-build snagging survey',
      description: `A New-build snagging survey is an independent inspection to look for any issues with the property.

      Costs typically start from £300 depending on the size of the property.

      Developers should fix faults highlighted before you move in.

      Learn about Avoiding costly mistakes when buying a new home.`
    },
    {
      type: 'Mortgage valuation survey',
      description: `The sole aim of the mortgage valuation is to satisfy the lender that
       your desired property is worth the price you’re paying – or at least the amount it’s lending, before they approve your mortgage.

      A valuation is just that – it won’t point out repairs or structural problems that you will have to pay to fix.

      Generally, you will pay for the lender’s survey. The cost is based on the value
      and size of the property and is typically £150 to £1,500.

      Sometimes lenders offer mortgages with free valuation surveys.

      If the property is valued below your offer price, you can either:

      Go back to the seller or the estate agent, and offer a lower price based on the lender’s valuation
      Dispute the valuation by providing evidence, if possible, of similar properties in the area selling for the same price or higher`
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
