import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Router } from '@angular/router';

import { SortConfig } from "../sort-config";
import { SortField } from "../sort-field";
import { SortEvent } from "../sort-event";

@Component({
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'app app-component flex-container in-column-direction flex-grow-1'},
  selector: 'sort-example',
  styles: [ require('./sort-example.component.css') ],
  template: require('./sort-example.component.html')
})
export class SortExampleComponent implements OnInit {

  allItems: any[];
  items: any[];
  isAscendingSort: boolean = true;
  sortConfig: SortConfig;
  currentSortField: SortField;

  monthVals = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.allItems = [
      {
        name: "Fred Flintstone",
        address: "20 Dinosaur Way, Bedrock, Washingstone",
        birthMonth: 'February'
      },
      {
        name: "John Smith",
        address: "415 East Main Street, Norfolk, Virginia",
        birthMonth: 'October'
      },
      {
        name: "Frank Livingston",
        address: "234 Elm Street, Pittsburgh, Pennsylvania",
        birthMonth: 'March'
      },
      {
        name: "Judy Green",
        address: "2 Apple Boulevard, Cincinatti, Ohio",
        birthMonth: 'December'
      },
      {
        name: "Pat Thomas",
        address: "50 Second Street, New York, New York",
        birthMonth: 'February'
      }
    ];
    this.items = this.allItems;

    this.sortConfig = {
      fields: [
        {
          id: 'name',
          title:  'Name',
          sortType: 'alpha'
        },
        {
          id: 'age',
          title:  'Age',
          sortType: 'numeric'
        },
        {
          id: 'address',
          title:  'Address',
          sortType: 'alpha'
        },
        {
          id: 'birthMonth',
          title:  'Birth Month',
          sortType: 'alpha'
        }
      ],
      isAscending: this.isAscendingSort
    } as SortConfig;
  }

  // Sort functions

  compare(item1: any, item2: any): number {
    var compValue = 0;
    if (this.currentSortField.id === 'name') {
      compValue = item1.name.localeCompare(item2.name);
    } else if (this.currentSortField.id === 'age') {
      compValue = item1.age - item2.age;
    } else if (this.currentSortField.id === 'address') {
      compValue = item1.address.localeCompare(item2.address);
    } else if (this.currentSortField.id === 'birthMonth') {
      compValue = this.monthVals[item1.birthMonth] - this.monthVals[item2.birthMonth];
    }

    if (!this.isAscendingSort) {
      compValue = compValue * -1;
    }
    return compValue;
  }

  sortChange($event: SortEvent): void {
    this.currentSortField = $event.field;
    this.isAscendingSort = $event.isAscending;
    this.items.sort((item1: any, item2: any) => this.compare(item1, item2));
  }
}
