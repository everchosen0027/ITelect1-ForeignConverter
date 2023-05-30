import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  symbols = 'https://api.exchangerate.host/symbols';
  rates = 'https://api.exchangerate.host/latest?base=';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getSymbols() {
    return new Promise(resolve => {
      this.httpClient.get(this.symbols, this.httpOptions).subscribe((data: any) => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  convCur(base, amount) {
    return new Promise(resolve => {
      let newRates = this.rates + base + '&amount=' + amount;
      this.httpClient.get(newRates, this.httpOptions).subscribe((data: any) => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
