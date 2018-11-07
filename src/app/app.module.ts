import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FinderComponent } from './house/finder/finder.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './house/results/results.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyResultsComponent } from './survey-results/survey-results.component';
import { SurveyTypesComponent } from './survey-types/survey-types.component';
// import { ResultsComponent } from './house/results/results.component';

const appRoutes: Routes = [
  { path: 'survey-finder', component: FinderComponent },
  { path: '', component: FinderComponent },
  { path: 'survey-results/:id', component: SurveyResultsComponent },
  { path: 'survey-types', component: SurveyTypesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    ResultsComponent,
    SurveyComponent,
    SurveyResultsComponent,
    SurveyTypesComponent,
    // ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
