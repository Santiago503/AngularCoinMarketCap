import { Injectable } from '@angular/core';
import { HttpRequestService } from '../request-http/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCapService {

  constructor(private reqHttp: HttpRequestService) { }




  getQuotes() {
    return this.reqHttp.getRequest('CoinMarketCap/quotes');
  }




}
