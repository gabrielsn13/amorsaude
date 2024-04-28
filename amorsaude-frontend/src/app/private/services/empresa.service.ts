import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IEmpresa } from '../../public/public.interface';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export const snackBarConfig: MatSnackBarConfig = {
  duration: 2500,
  horizontalPosition: 'right',
  verticalPosition: 'top'
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  getEmpresas(): Observable<IEmpresa[]>{
    return this.httpClient.get<IEmpresa[]>(`http://localhost:3000/api/empresa`);
  }

  atualizarEmpresa(empresa: IEmpresa): Observable<IEmpresa>{
    return this.httpClient.post<IEmpresa>('http://localhost:3000/api/empresa', empresa).pipe(
      tap((empresaCriada: IEmpresa) => this.snackbar.open(`Usuario ${empresaCriada.username} foi criado com sucesso!`, 'Close', snackBarConfig)),
      catchError(e => {
        this.snackbar.open(`Nao foi possivel atualizar, motivo: ${e.error.message}`, 'Close', snackBarConfig);
        return throwError(e);
      })
    )
  }

  cadastrarEmpresa(empresa: IEmpresa): Observable<IEmpresa>{
    return this.httpClient.post<IEmpresa>('http://localhost:3000/api/empresa', empresa).pipe(
      tap((empresaCriada: IEmpresa) => this.snackbar.open(`Usuario ${empresaCriada.username} foi criado com sucesso!`, 'Close', snackBarConfig)),
      catchError(e => {
        this.snackbar.open(`Nao foi possivel criar a empresa, motivo: ${e.error.message}`, 'Close', snackBarConfig);
        return throwError(e);
      })
    )
  }
}
