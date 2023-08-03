import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../model/url.url';
import { UrlResponse } from './dto/url.response';
import { UrlDto } from './dto/url.dto';
import { listaUrlDto } from './dto/lista.url.dto';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  enviarUrl(data: UrlDto): Observable<UrlResponse> {
    return this.http.post<UrlResponse>(`${baseUrl}/enviar`, data);
  }

  getAllUrl(): Observable<listaUrlDto> {
    return this.http.get<listaUrlDto>(`${baseUrl}/listar`);
  }

//   deleteUrl(id: String): Observable<any> {
//     return this.http.delete(`${baseUrl}/deletar/${id}`);
//   }

}