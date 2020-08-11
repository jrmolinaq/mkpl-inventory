import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'modal-info-block',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/modal-info-block.component.html'
})
export class ModalInfoBlockComponent {

  @Input() info: string;
  @Input() bold: string;
  @Input() icon: string;
  @Input() error: string;
}
