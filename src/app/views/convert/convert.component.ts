import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CryptoDataConvert } from 'src/app/models/coin-market-cap/convert-crypto';
import { CryptoCoin } from 'src/app/models/coin-market-cap/cryptoCoin';
import { AlertService } from 'src/app/services/alert/alert.service';
import { HttpRequestService } from 'src/app/services/request-http/http-request.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  symbol: string;
  toConvert: string;
  amount = 10;
  cryptoDataConvert: CryptoDataConvert;
  constructor(
    private reqHttp: HttpRequestService,
    private alertServ: AlertService,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.actRoute.params.subscribe((resp) => {
      this.symbol = resp.symbol;
      this.toConvert = resp.toConvert;


      this.getCryptoConvert(this.amount, this.symbol, this.toConvert);
    });
  }


  getCryptoConvert(amount: number = 1, symbol:string, convert: string) {

    const options = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
    };

    options.params = options.params
      .append('amount', amount.toString())
      .append('symbol', symbol.toString())
      .append('convert', convert.toString());


    this.reqHttp
      .getRequest('CoinMarketCap/convert-crypto', options)
      .subscribe(
        (resp: CryptoDataConvert) => {
          this.cryptoDataConvert = resp;
          console.log("~ resp", resp.quote)
        },
        (error) => {
          this.alertServ.toartError(
            'Ocurrio un Error!',
            'Ah ocurrido un error, dale click al boton de iniciar para volver intentarlo. ' +
              error.error
          );

        }
      );
  }


  formGroup = this.fb.group({
    amount: [10],
    estadoId: [0],
  });


}
