import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private searchedData: any;

  constructor() {}

  // metodo per ottenere i dati
  getSearchedData() {

    return this.searchedData;
  }

  // metodo per impostare i dati
  setSearchedData(data: any) {

    this.searchedData = data;
  }
}
