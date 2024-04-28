import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpresa } from '../../public/public.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmpresas(): Observable<IEmpresa[]>{
    // console.log('teste', usuario);
    // return this.httpClient.post<IUsuario>('http://localhost:3000/api/usuario', usuario).pipe(
    //   tap((usuarioCriado: IUsuario) => this.snackbar.open(`Usuario ${usuarioCriado.username} foi criado com sucesso!`, 'Close', snackBarConfig)),
    //   catchError(e => {
    //     this.snackbar.open(`Nao foi possivel criar o usuario, motivo: ${e.error.message}`, 'Close', snackBarConfig);
    //     return throwError(e);
    //   })
    // )
    return this.httpClient.get<IEmpresa[]>(`http://localhost:3000/api/usuario`)
  }
}
