import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfferService } from 'src/app/service/offer.service';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.page.html',
  styleUrls: ['./offer-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OfferListPage implements OnInit {

  // dove salverò i dati ricevuti dalla ricerca
  data: any;

  constructor(private offerService: OfferService ) { }

  ngOnInit() {

    this.data = this.offerService.getSearchedData();

    console.log(this.data['data']);
  }

}
