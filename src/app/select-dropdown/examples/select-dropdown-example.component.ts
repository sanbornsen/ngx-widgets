import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'select-dropdown-example',
  styleUrls: ['./select-dropdown-example.component.scss'],
  templateUrl: './select-dropdown-example.component.html'
})


export class SelectDropdownExmpleComponent implements OnInit {
  private labels: any[] = [];
  private backup: any[] = [];
  private multiSelect: boolean = true;
  private searchValue: string = '';
  private activeAddLabel: boolean = false;

  ngOnInit() {
    this.labels = [
      {id: 1, color: '#ffffff', name: 'white', selected: false},
      {id: 2, color: '#000000', name: 'black', selected: false},
      {id: 3, color: '#ff4c4c', name: 'red', selected: false},
      {id: 4, color: '#4cff4c', name: 'green', selected: false},
      {id: 5, color: '#ffffff', name: 'white', selected: false},
      {id: 6, color: '#000000', name: 'black', selected: false},
      {id: 7, color: '#ff4c4c', name: 'red', selected: false},
      {id: 8, color: '#4cff4c', name: 'green', selected: false},
      {id: 9, color: '#ffffff', name: 'white', selected: false},
      {id: 10, color: '#000000', name: 'black', selected: false},
      {id: 11, color: '#ff4c4c', name: 'red', selected: false},
      {id: 12, color: '#4cff4c', name: 'green', selected: false}
    ];
    this.backup = cloneDeep(this.labels);
  }


  onSelect(event: any) {
    console.log(event);
    let findIndex = this.labels.findIndex(i => i.id === event.id);
    if (findIndex > -1) {
      if (this.multiSelect) {
        this.labels[findIndex].selected = !this.labels[findIndex].selected;
      } else {
        this.labels.forEach(i => i.selected = false);
        this.labels[findIndex].selected = true;
      }
    }
    let findIndexBackup = this.backup.findIndex(i => i.id === event.id);
    if (findIndexBackup > -1) {
      if (this.multiSelect) {
        this.backup[findIndexBackup].selected = !this.backup[findIndexBackup].selected;
      } else {
        this.backup.forEach(i => i.selected = false);
        this.backup[findIndexBackup].selected = true;
      }
    }
  }

  onSearch(event: any) {
    let needle = event.trim();
    this.searchValue = needle;
    if (needle.length) {
      this.labels = cloneDeep(this.backup.filter(i => i.name.indexOf(needle) > - 1));
    } else {
      this.labels = cloneDeep(this.backup);
    }
  }

  clickOnAddLabel() {
    this.activeAddLabel = true;
  }
  closeAddLabel() {
    this.activeAddLabel = false;
  }
}
