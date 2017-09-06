import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'f8-select-dropdown',
  styleUrls: ['./select-dropdown.component.scss'],
  templateUrl: './select-dropdown.component.html'
})
export class SelectDropdownComponent implements OnInit {
  @Input() headerText: string = 'This is default header';
  @Input() toggleButtonRef: TemplateRef<any>;
  @Input() dropdownItem: TemplateRef<any>;
  @Input() menuItems: object[] = [];

  private displayDropdown: boolean = false;
  private myContext = {$implicit: 'World', localSk: 'Svet1', myName: 'Sanborn'};
  ngOnInit() {
    console.log('##### - 1', this.menuItems);
  }

  toggleDropdown() {
    this.displayDropdown = true;
  }
  closeDropdown() {
    this.displayDropdown = false;
  }
}
