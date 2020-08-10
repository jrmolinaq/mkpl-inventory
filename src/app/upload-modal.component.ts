import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormService } from './services/form.service';
import { ModalService } from './services/modal.service';
import { UploadFileService } from './services/upload-file.service';

import { FIELDS, qualityTypes } from './constants/upload-modal-constants';
import { MAX_FILE_SIZE, STEPS } from './constants/upload-modal-constants';

declare const Liferay: any;

@Component({
  selector: 'upload-modal',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/upload-modal.component.html',
  styleUrls: [
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-inventory/css/upload-modal.component.scss']
})

export class UploadModalComponent implements OnInit {
  @Output() uploaded = new EventEmitter<boolean>();
  form: FormGroup;
  currentModalStep = '';
  file: File;
  modalError: string;
  steps = STEPS;
  qualityTypes = qualityTypes;
  subsidiaryId: number;

  constructor(
    private modalService: ModalService,
    private uploadFileService: UploadFileService,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.form = this.formService.createForm(FIELDS);
    
		// TODO: traer el subsidiaryId
		this.subsidiaryId = 5;
  }

  upload(file: File) {
    this.file = file;
    const fileExtension = file.name.split('.').pop();

    if (fileExtension !== 'xls' && fileExtension !== 'xlsx') {
      this.modalError = 'El archivo debe tener extensión .xls o xlsx';
      return this.changeModal(this.steps.ERROR);
    }

    if (file.size > MAX_FILE_SIZE) {
      this.modalError = 'El archivo sobre pasa el peso máximo.';
      return this.changeModal(this.steps.ERROR);
    }

    this.changeModal(this.steps.LOADING);
    let flag: boolean = this.uploadFileService.uploadFile(file, fileExtension, this.subsidiaryId);
    
    if (flag) {
      this.uploadSuccess();
    } else {
        this.modalError = "Ocurrió un error";
        this.changeModal(this.steps.ERROR);
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string, refresh?: boolean) {
    if (refresh) {
      window.location.reload();
    }
    this.modalService.close(id);
  }

  changeModal(step: string = '') {
    this.currentModalStep = step;
  }

  closeProductUpload() {
    this.form.reset();
    this.changeModal();
  }

  uploadSuccess() {
    this.changeModal(this.steps.SUCCESS);
    this.uploaded.emit();
  }

  uploadProduct() {
    const body = {
      reference: this.form.get('productInfo').value.reference,
      name: this.form.get('productInfo').value.name,
      price: this.form.get('productInfo').value.unitPrice,
      stock: this.form.get('productInfo').value.quantity,
      quality: this.form.get('productInfo').value.quality
    };

    let flag: boolean = this.uploadFileService.uploadUnitaryProduct(body);

    if (flag) {
      this.changeModal(this.steps.SUCCESS_INDIVIDUAL);
      this.uploaded.emit();
      this.form.reset();
    } else {
      this.modalError = 'El producto no pudo ser cargado';
      this.changeModal(this.steps.ERROR);
      this.form.reset();
    }
  }
}
