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
    arrivalDate: '',
    stayDays: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
