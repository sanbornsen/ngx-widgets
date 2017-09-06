import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SelectDropdownExmpleComponent } from './select-dropdown-example.component';
import { SelectDropdownModule } from './../select-dropdown.module';

@NgModule({
  declarations: [ SelectDropdownExmpleComponent ],
  imports: [ CommonModule, RouterModule, SelectDropdownModule ]
})
export class SelectDropdownExmpleModule {
  constructor() {}
}
