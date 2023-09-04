import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SubscriptionDataService } from '../subscription-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  selectedSubscriptionId: number | undefined;
  profile: any = {};

  constructor(private route: ActivatedRoute ,private subscriptionDataService: SubscriptionDataService,
     private profileService: ProfileService     ) { 
      this.route.queryParams.subscribe((params) => {
        this.selectedSubscriptionId = params['subscriptionId'];
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {


    this.profileService.createProfile(this.profile).subscribe(
      (response) => {
        // Gestion de la réponse du backend en cas de succès
        console.log('Inscription réussie', response);
        // Redirigez l'utilisateur vers la page de paiement Stripe
        // Vous pouvez utiliser la navigation Angular pour cela
      },
      (error) => {
        // Gestion des erreurs en cas d'échec de l'inscription
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}
