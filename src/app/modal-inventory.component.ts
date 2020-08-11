import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'modal-inventory',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/modal-inventory.component.html'
})
export class ModalInventoryComponent {

  @Input() error: string;
}
