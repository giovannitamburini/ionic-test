import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { OfferService } from 'src/app/service/offer.service';
import { Device } from '@capacitor/device';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonImg} from '@ionic/angular/standalone';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.page.html',
  styleUrls: ['./offer-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonInput, IonSelect,IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonImg]
})
export class OfferFormPage implements OnInit {

  formData = {
    location: '',
    arrivalDate: new Date().toISOString(),
    stayDays: ''
  };

  // variabili necessarie per fare la chiamata api--------
  private baseUrl = 'https://test.appazzurroclub.it/serveracv/public/api/Api3/offers';

  private finalQueryString = '&rooms%5B0%5D%5Bpeoples%5D=3&rooms%5B0%5D%5Broom_type_id%5D=37&lang=';

  private urlApi = '';

  // lingue disponibili chiamata api
  private allowedLanguages = ["it", "en", "de", "fr"];

  // dove salvo la lingua del device con metodo getDeviceLang()
  private deviceLang = '';


  constructor(private navCtrl: NavController, private offerService: OfferService) { }

  
  ngOnInit() {
    this.getDeviceLang();
  }


  // METHODS -------------------------------------------

  // metodo per ottenere 
  async getDeviceLang() {

    const lang = await Device.getLanguageCode();

    // console.log(lang.value);

    // this.deviceLang = lang.value;

  if (!this.allowedLanguages.includes(lang.value)) {

      this.deviceLang = "en";
  } else {
    
      this.deviceLang = lang.value;

      console.log(this.deviceLang);
  }

  }

  // method to transform the date into the correct format(yyyy-mm-dd)
  getOnlyDate(){

    const formattedDate : string = this.formData.arrivalDate.split('T')[0];

    this.formData.arrivalDate = formattedDate;
  }


  // metodo per comporre l'url per la chiamata api
  urlApiCreator(){

    // compongo la query string
    let customQueryString : string = '?hotel_code=' + this.formData.location + '&date_start=' + this.formData.arrivalDate + '&days=' + this.formData.stayDays;

    this.urlApi = this.baseUrl + customQueryString + this.finalQueryString + this.deviceLang;
  }

  // metodo per attivare il bottone submit nel caso gli input siano tutti settati
  areInputsValid(): boolean {
    // Controlla che tutti gli input siano compilati
    return this.formData.location !== '' && this.formData.arrivalDate !== '' && this.formData.stayDays !== '';
  }


  // method to search offers
  searchOffers(){
    
    // richiamo la funzione per prendere la data nel formato corretto
    this.getOnlyDate();

    // richiamo la funzione che compone la stringa completa per la API
    this.urlApiCreator();

    // effettua la chiamata api tramite fetch
    fetch(this.urlApi)
    .then(response => response.json())
    .then(data => {

      // console.log(data);

      // salvo il risultato della chiamata nella variabile contenuta nel servizio offerService
      this.offerService.setSearchedData(data);

      this.navCtrl.navigateForward('/offer-list');

    })
    .catch(error => {
      console.error('request failed', error);
    })
  };


  // metodo da utilizzare per impostare la data minima nell'input date
  getCurrentDate() {

    return new Date().toISOString().split('T')[0];
  }

}
