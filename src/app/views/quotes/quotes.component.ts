import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { CryptoCoin, Crypto } from 'src/app/models/coin-market-cap/cryptoCoin';
import { HttpRequestService } from 'src/app/services/request-http/http-request.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Crypto[];
  time = 1000;
  count = 0;
  interval: any;
  timeCallApi = 5;

  constructor(private reqHttp: HttpRequestService) { }

  ngOnInit(): void {
    this.getQuotes();
    this.updateBySecond();
  }


  getQuotes() {
    this.reqHttp.getRequest('CoinMarketCap/quotes')
    .subscribe(
      (resp: CryptoCoin) => {
        this.quotes = Object.values(resp.data) ;
        console.log("~ resp", Object.values(resp.data) )
      },
      error => {

      });
  }

  updateBySecond() {
   this.interval =  interval(this.time).subscribe(x =>{
      this.count++;
      if(this.count == this.timeCallApi) {

        this.getQuotes();
        this.count = 0;
      }
    });
  }

  desubscribeInterval() {
    this.interval.unsubscribe();
  }

  subscribeInterval() {
    console.log(this.interval)
    if(this.interval.closed) {
      this.updateBySecond();
    }
  }

  resetInterval() {
    this.count = 0;
  }





}
