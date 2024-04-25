import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { ILoginResponse, IUsuario } from '../../public.interface';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LOCALSTORAGE_KEY_NESTJS_AMORSAUDE_APP } from '../../../app.module';


export const snackBarConfig: MatSnackBarConfig = {
  duration: 2500,
  horizontalPosition: 'right',
  verticalPosition: 'top'
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  login(usuario: IUsuario): Observable<ILoginResponse>{
    return this.httpClient.post<ILoginResponse>('http://localhost:3000/api/usuario/login', usuario).pipe(
      tap((res: ILoginResponse) => localStorage.setItem(LOCALSTORAGE_KEY_NESTJS_AMORSAUDE_APP, res.access_token)),
      tap(() => this.snackbar.open('Sucesso Login!', 'Close', snackBarConfig)),
      catchError(e => {
        this.snackbar.open(`${e.error.message}`, 'Close', snackBarConfig);
        return throwError(e);
      })
    )
  }

  register(usuario: IUsuario): Observable<IUsuario>{
    console.log('teste', usuario);
    return this.httpClient.post<IUsuario>('http://localhost:3000/api/usuario', usuario).pipe(
      tap((usuarioCriado: IUsuario) => this.snackbar.open(`Usuario ${usuarioCriado.username} foi criado com sucesso!`, 'Close', snackBarConfig)),
      catchError(e => {
        this.snackbar.open(`Nao foi possivel criar o usuario, motivo: ${e.error.message}`, 'Close', snackBarConfig);
        return throwError(e);
      })
    )
  }
}
