import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UploadFileService {
  constructor(private http: HttpClient) { }

  uploadFile(file: File, extension: string, subsidiaryId: number): any {
    let fileUrl: any;
    return true;
  }

  private handleError() {
    return throwError('Sucedió un error inesperado al subir el archivo');
  }

  uploadUnitaryProduct(body: any) {
    return true;
  }
}
