import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDropdownComponent } from './select-dropdown.component';
import { AlmEditableModule } from './../editable/almeditable.module';

@NgModule({
  declarations: [ SelectDropdownComponent ],
  imports: [ CommonModule ],
  exports: [ SelectDropdownComponent ]
})
export class SelectDropdownModule { }
