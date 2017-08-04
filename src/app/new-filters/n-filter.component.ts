import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  ViewEncapsulation,
  SimpleChanges
} from '@angular/core';

import { NewFilter } from './n-filter';
import { NewFilterConfig } from './n-filter-config';
import { NewFilterQuery } from './n-filter-query';
import { NewFilterEvent } from './n-filter-event';

import * as _ from 'lodash';

/**
 * Component for the filter bar's filter entry components
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'alm-n-filter',
  styleUrls: ['./n-filter.component.scss'],
  templateUrl: './n-filter.component.html'
})
export class NewFilterComponent implements OnInit, OnChanges {
  @Input() config: NewFilterConfig;
  @Input() queries: NewFilterQuery[];

  @Output('onChange') onChange = new EventEmitter();
  @Output('onFilterKeySelection') onFilterKeySelection = new EventEmitter();
  @Output('typeAhedFilterQueries') typeAhedFilterQueries = new EventEmitter();

  prevConfig: NewFilterConfig;

  constructor() {
  }

  // Initialization

  ngOnInit(): void {
    this.setupConfig();
  }

  ngDoCheck(): void {
    // Do a deep compare on config
    if (!_.isEqual(this.config, this.prevConfig)) {
      this.setupConfig();
    }
  }

  setupConfig(): void {
    this.prevConfig = _.cloneDeep(this.config);

    if (this.config && this.config.appliedFilters === undefined) {
      this.config.appliedFilters = [];
    }
  }

  // Listener for changes to inputs

  ngOnChanges(changes: SimpleChanges): void {
    // queries is updated, the current field filter has new right hand values.
    // There is nothing to be done here as the event will be delegated automatically
    // due to queries also the input for the parent component.
    // if (changes['queries']) {
      // do some logging here possibly.
    // }
  }

  // Detecting changes to the left hand selection.
  getFilterKeyValues(event: any) {
    // the event is the filter key.
    let filterKeyId = event;
    this.onFilterKeySelection.emit(filterKeyId);
  }

  // Filter functions

  addFilter($event: NewFilterEvent): void {
    let newFilter = {
      field: $event.field,
      query: $event.query,
      value: $event.value
    } as NewFilter;

    if (!this.filterExists(newFilter)) {
      if (newFilter.field.type === 'select') {
        this.enforceSingleSelect(newFilter);
      }
      this.config.appliedFilters.push(newFilter);
      $event.appliedFilters = this.config.appliedFilters;
      this.onChange.emit($event);
    }
  }

  enforceSingleSelect(filter: NewFilter): void {
    _.remove(this.config.appliedFilters, {title: filter.field.title});
  }

  filterExists(filter: NewFilter): boolean {
    let foundFilter = _.find(this.config.appliedFilters, {
      value: filter.value
    });
    return foundFilter !== undefined;
  }

  onClear($event: NewFilter[]): void {
    this.config.appliedFilters = $event;
    this.onChange.emit({
      appliedFilters: $event
    } as NewFilterEvent);
  }

  onFilterQueries(event: any) {
    this.typeAhedFilterQueries.emit(event);
  }
}
