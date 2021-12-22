import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoDataConvert } from 'src/app/models/coin-market-cap/convert-crypto';
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
  isLoading = false;
  constructor(
    private reqHttp: HttpRequestService,
    private alertServ: AlertService,
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.actRoute.params.subscribe(
     (resp) => {
      this.formGroup.patchValue({
        symbol: resp?.symbol,
        amount: resp?.amount,
        convert: resp?.toConvert
      });
      this.getCryptoConvert();
    });
  }

  getCryptoConvert() {
    const { amount, symbol, convert } = this.formGroup.value;

    let isValid  = this.validate(symbol);

    if(!isValid) { return }
    this.isLoading = true;
    const options = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
    };


    options.params = options.params
      .append('amount', amount)
      .append('symbol', symbol)
      .append('convert', convert);

    this.reqHttp
      .getRequest('CoinMarketCap/convert-crypto', options)
      .subscribe(
        (resp: CryptoDataConvert) => {
          this.cryptoDataConvert = resp;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.alertServ.toartError(
            'Ocurrio un Error!',
            'Ah ocurrido un error, dale click al boton de convertir para volver intentarlo. ' +
              error.error
          );
        }
      );
  }

  formGroup = this.fb.group({
    amount: [10],
    symbol: [''],
    convert: ['']
  });


  validate(symbol: string) {
    if(symbol.includes(',')) {
      this.alertServ.toartError(
        'Error!',
        'Solo se Permite una Crypto para Convertir'
      );
      return false;
    }

    return true;
  }

  Convert() {

    const { amount, symbol, convert } = this.formGroup.value;
    this.route.navigateByUrl( `cryptos/convert/${symbol}/${convert}/${amount}`);
  }

}
