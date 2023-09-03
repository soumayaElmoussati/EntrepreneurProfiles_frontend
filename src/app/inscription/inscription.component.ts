import { Component, OnInit } from '@angular/core';
import { SubscriptionDataService } from '../subscription-data.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  selectedSubscription: any;

  constructor(private subscriptionDataService: SubscriptionDataService) { 
    this.selectedSubscription = subscriptionDataService.getSelectedSubscription();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Traitement du formulaire d'inscription ici
    // Vous pouvez envoyer les données d'inscription au backend, créer un profil, etc.
  }
}
