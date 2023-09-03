import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  offers = [
    {
      name: 'Offre Standard',
      description: 'Abonnement de base avec fonctionnalités limitées.',
      price: 19.99
    },
    {
      name: 'Offre Premium',
      description: 'Abonnement premium avec toutes les fonctionnalités.',
      price: 49.99
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
