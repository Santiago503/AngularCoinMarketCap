import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';
import { CryptoCoin, Crypto } from 'src/app/models/coin-market-cap/cryptoCoin';
import { AlertService } from 'src/app/services/alert/alert.service';
import { HttpRequestService } from 'src/app/services/request-http/http-request.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Crypto[];
  time = 1000;
  count = 0;
  interval: any;
  timeCallApi = 5;
  private unsubscribe$ = new Subject<void>();
  constructor(
    private reqHttp: HttpRequestService,
    private alertServ: AlertService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getQuotes();
    this.updateBySecond();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getQuotes() {
    this.reqHttp
      .getRequest('CoinMarketCap/quotes')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (resp: CryptoCoin) => {
          this.quotes = Object.values(resp.data);
          console.log('~ resp', Object.values(resp.data));
        },
        (error) => {
          this.alertServ.toartError(
            'Ocurrio un Error!',
            'Ah ocurrido un error, dale click al boton de iniciar para volver intentarlo. ' +
              error.error
          );

          this.desubscribeInterval();
        }
      );
  }

  updateBySecond() {
    this.interval = interval(this.time)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((x) => {
        this.count++;
        if (this.count == this.timeCallApi) {
          this.getQuotes();
          this.count = 0;
        }
      });
  }

  desubscribeInterval() {
    this.interval.unsubscribe();
  }

  subscribeInterval() {
    console.log(this.interval);
    if (this.interval.closed) {
      this.updateBySecond();
    }
  }

  resetInterval() {
    this.count = 0;
  }

  goConvert(coin: Crypto, toConvert: Crypto[]) {
    let ParamResiduary = '';

    toConvert.forEach((element: Crypto) => {
      if (coin.symbol != element.symbol) {
        ParamResiduary += element.symbol + ',';
      }
    });
    ParamResiduary = ParamResiduary.substring(0, ParamResiduary.length - 1);
    console.log(ParamResiduary);

    this.route.navigateByUrl(
      `cryptos/convert/${coin.symbol.toLocaleLowerCase()}/${ParamResiduary.toLocaleLowerCase()}`
    );
  }
}
