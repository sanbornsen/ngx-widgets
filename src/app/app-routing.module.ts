import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MarkdownExampleComponent } from './markdown/examples/markdown-example.component';
import {
  SelectDropdownExmpleComponent
} from './select-dropdown/examples/select-dropdown-example.component';
import { SlideOutExampleComponent } from './slide-out-panel/examples/slide-out-example.component';
import { TreeListExampleComponent } from './treelist/examples/treelist-example.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'slideoutpanel',
    component: SlideOutExampleComponent
  }, {
    path: 'treelist',
    component: TreeListExampleComponent
  }, {
    path: 'markdown',
    component: MarkdownExampleComponent
  }, {
    path: 'select-dropdown',
    component: SelectDropdownExmpleComponent
  }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
