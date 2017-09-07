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
  private colors: any[] = [];
  private colorPickerActive: boolean = false;
  private newSelectedColor: string = '';

  ngOnInit() {
    this.colors = [
      {color: '#fbdebf', border: '#f39d3c'},
      {color: '#f7bd7f', border: '#f39d3c'},
      {color: '#fbeabc', border: '#f39d3c'},
      {color: '#f9d67a', border: '#f39d3c'},
      {color: '#e4f5bc', border: '#ace12e'},
      {color: '#cfe7cd', border: '#6ec664'},
      {color: '#fbdebf', border: '#f39d3c'},
      {color: '#f7bd7f', border: '#f39d3c'},
      {color: '#fbeabc', border: '#f39d3c'},
      {color: '#f9d67a', border: '#f39d3c'},
      {color: '#e4f5bc', border: '#ace12e'},
      {color: '#cfe7cd', border: '#6ec664'}
    ];
    this.newSelectedColor = this.colors[0].color;
    this.labels = [
      {id: 1, color: '#ffffff', name: 'white', selected: false},
      {id: 2, color: '#000000', name: 'black', selected: false},
      {id: 3, color: '#ff4c4c', name: 'red', selected: false},
      {id: 4, color: '#4cff4c', name: 'green', selected: false},
      {id: 5, color: '#ffffff', name: 'white', selected: false},
    ];

    this.backup = cloneDeep(this.labels);
  }


  onSelect(event: any) {
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

  toggleColorPicker() {
    this.colorPickerActive = !this.colorPickerActive;
  }

  selectColor(color: any) {
    this.newSelectedColor = color.color;
  }
  createLabel(name: any) {
    const newLabel = {
      id: this.backup.length + 1,
      color: this.newSelectedColor,
      name: name,
      selected: true
    };
    this.backup.push(cloneDeep(newLabel));
    if (this.searchValue === '' ||
        (this.searchValue !== '' &&
          name.indexOf(this.searchValue) > - 1
        )
      ) {
        this.labels.push(cloneDeep(newLabel));
      }
    this.closeAddLabel();
  }
}
