import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'modal-inventory',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/modal-inventory.component.html',
  styleUrls: [
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/css/modal-inventory.component.scss']
})
export class ModalInventoryComponent {

  @Input() error: string;
}
