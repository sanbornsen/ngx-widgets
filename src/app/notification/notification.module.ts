import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ng2-bootstrap';

import { NotificationEvent } from './notification-event';
import { NotificationService } from './notification.service';
import { ToastNotificationComponent } from './toast-notification.component';
import { ToastNotificationListComponent } from './toast-notification-list.component';

export {
  NotificationEvent
}

@NgModule({
  imports: [ CommonModule, BsDropdownModule ],
  declarations: [ ToastNotificationComponent, ToastNotificationListComponent ],
  exports: [ ToastNotificationComponent, ToastNotificationListComponent ],
  providers: [ NotificationService ]
})
export class NotificationModule { }
