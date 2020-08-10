import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'modal-info-block',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/modal-info-block.component.html',
  styleUrls: [
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/css/modal-info-block.component.scss']
})
export class ModalInfoBlockComponent {

  @Input() info: string;
  @Input() bold: string;
  @Input() icon: string;
  @Input() error: string;
}
