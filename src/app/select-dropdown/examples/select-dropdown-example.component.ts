import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'select-dropdown-example',
  styleUrls: ['./select-dropdown-example.component.scss'],
  templateUrl: './select-dropdown-example.component.html'
})


export class SelectDropdownExmpleComponent implements OnInit {
  private labels: object[] = [];
  private multiSelectTrue: boolean = true;

  ngOnInit() {
    this.labels = [
      {color: '#ffffff', name: 'white', selected: true},
      {color: '#000000', name: 'black', selected: false},
      {color: '#ff4c4c', name: 'red', selected: false},
      {color: '#4cff4c', name: 'green', selected: false},
      {color: '#ffffff', name: 'white', selected: true},
      {color: '#000000', name: 'black', selected: false},
      {color: '#ff4c4c', name: 'red', selected: false},
      {color: '#4cff4c', name: 'green', selected: false},
      {color: '#ffffff', name: 'white', selected: true},
      {color: '#000000', name: 'black', selected: false},
      {color: '#ff4c4c', name: 'red', selected: false},
      {color: '#4cff4c', name: 'green', selected: false}
    ];
  }
}
