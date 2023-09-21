import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionDataService } from '../subscription-data.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
 
  subscriptions: any[] = [];
  selectedSubscriptionId: number | null = null;

  constructor(private subscriptionService: SubscriptionDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadSubscriptions();
  }


  loadSubscriptions(): void {
    this.subscriptionService.getSubscriptions().subscribe(
      (subscriptions) => {
        this.subscriptions = subscriptions;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectSubscription(subscriptionId: number): void {
    this.selectedSubscriptionId = subscriptionId;
  }

  navigateToInscription(): void {
    console.log('Méthode navigateToInscription() appelée.');
    if (this.selectedSubscriptionId) {
      this.router.navigate(['/inscription'], {
        queryParams: { subscriptionId: this.selectedSubscriptionId }
      });
    } else {
      console.log('Aucune souscription sélectionnée.');
    }
  }

}
