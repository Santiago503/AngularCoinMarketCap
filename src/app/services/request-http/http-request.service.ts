import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export enum HttpVerbs {
  Get,
  Post,
  Put,
  Delete,
}

export class RequestOptionsModel {
  headers: HttpHeaders;
  params?: HttpParams;
}

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {}

  private httpOptionsHandler(options: RequestOptionsModel, httpVerbs: HttpVerbs) {
    if (!options) options = { headers: new HttpHeaders() };

    switch (httpVerbs) {
      case HttpVerbs.Get:
      case HttpVerbs.Post:
      case HttpVerbs.Put:
      case HttpVerbs.Delete: {
        options.headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
      }
    }

    return options;
  }

  // The any type will be change after all the models had been typed
  getRequest<T = any>(endPoint: string, options?: RequestOptionsModel): Observable<T> {
    options = this.httpOptionsHandler(options, HttpVerbs.Get);
    return this.httpClient.get<T>(environment.Api_Rest + endPoint, options);
  }

}
