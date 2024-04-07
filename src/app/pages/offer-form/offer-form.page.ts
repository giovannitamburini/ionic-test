import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.page.html',
  styleUrls: ['./offer-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonInput, IonSelect,IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonButton]
})
export class OfferFormPage implements OnInit {

  formData = {
    location: '',
    arrivalDate: new Date().toISOString(),
    stayDays: ''
  };

  // variabili necessarie per fare la chiamata api--------
  private baseUrl = 'https://test.appazzurroclub.it/serveracv/public/api/Api3/offers';

  private finalQueryString = '&rooms%5B0%5D%5Bpeoples%5D=3&rooms%5B0%5D%5Broom_type_id%5D=37&lang=it';

  private urlApi = '';


  // 
  public response = {
    data: ''
  };

  constructor() { }

  
  ngOnInit() {
  }


  // METHODS -------------------------------------------

  // method to transform the date into the correct format(yyyy-mm-dd)
  getOnlyDate(){

    const formattedDate : string = this.formData.arrivalDate.split('T')[0];

    this.formData.arrivalDate = formattedDate;
  }

  // metodo per comporre l'url per la chiamata api
  urlApiCreator(){

    // compongo la query string
    let customQueryString : string = '?hotel_code=' + this.formData.location + '&date_start=' + this.formData.arrivalDate + '&days=' + this.formData.stayDays;

    this.urlApi = this.baseUrl + customQueryString + this.finalQueryString;
  }

  // method to search offers
  searchOffers(){
    
    // richiamo la funzione per prendere la data nel formato corretto
    this.getOnlyDate();

    // richiamo la funzione che compone la stringa completa per la API
    this.urlApiCreator();


    fetch(this.urlApi)
    .then(response => response.json())
    .then(data => {

      console.log(data);

      this.response = data;
    });

  };

}
