import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'select-dropdown-example',
  styleUrls: ['./select-dropdown-example.component.scss'],
  templateUrl: './select-dropdown-example.component.html'
})


export class SelectDropdownExmpleComponent implements OnInit {
  private labels: object[] = [];

  ngOnInit() {
    this.labels = [
      {color: '#ffffff', name: 'white'},
      {color: '#000000', name: 'black'},
      {color: '#ff4c4c', name: 'red'},
      {color: '#4cff4c', name: 'green'},
      {color: '#ffffff', name: 'white'},
      {color: '#000000', name: 'black'},
      {color: '#ff4c4c', name: 'red'},
      {color: '#4cff4c', name: 'green'},
      {color: '#ffffff', name: 'white'},
      {color: '#000000', name: 'black'},
      {color: '#ff4c4c', name: 'red'},
      {color: '#4cff4c', name: 'green'}
    ];
  }
}
