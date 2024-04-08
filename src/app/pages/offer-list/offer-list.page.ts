import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { OfferService } from 'src/app/service/offer.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.page.html',
  styleUrls: ['./offer-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class OfferListPage implements OnInit {

  // dove salverò i dati ricevuti dalla ricerca
  data: any;

  constructor(private navCtrl: NavController ,private offerService: OfferService ) { }

  ngOnInit() {

    this.data = this.offerService.getSearchedData();

    console.log(this.data['data']);
  }


  // metodo per tornare alla pagina del form
  navigateToForm() {

    this.navCtrl.navigateForward('/offer-form');
  }
}
