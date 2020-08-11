import { Component, Output, Input, EventEmitter } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'input-file',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/input-file.component.html'
})
export class InputFileComponent {
  @Input() label: string;
  @Input() accept = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];
  @Output() fileSelected: EventEmitter<File> = new EventEmitter();

  upload(event: { target: { files: File[]; }; }) {
    this.fileSelected.emit(event.target.files[0]);
  }
}
