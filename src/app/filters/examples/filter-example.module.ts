import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { FiltersModule } from '../filters.module';
import { FilterExampleComponent } from './filter-example.component';
import { FilterExampleRoutingModule } from './filter-example-routing.module';

@NgModule({
  imports: [ CommonModule, FilterExampleRoutingModule, FiltersModule, HttpModule ],
  declarations: [ FilterExampleComponent ]
})
export class FilterExampleModule {
  constructor(http: Http) {}
}
