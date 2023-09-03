import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionDataService {
  private selectedSubscription: any;

  constructor() { }

  setSelectedSubscription(subscription: any) {
    this.selectedSubscription = subscription;
  }

  // Méthode pour récupérer l'abonnement sélectionné
  getSelectedSubscription() {
    return this.selectedSubscription;
  }
}
