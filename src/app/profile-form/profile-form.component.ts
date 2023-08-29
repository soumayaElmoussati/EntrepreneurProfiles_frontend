import { Component, OnInit } from '@angular/core';
import { ProfileCreateService } from '../profile-create.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {

  constructor(private profileCreateService: ProfileCreateService) {}

  onSubmit(profileData: any): void {
    this.profileCreateService.createProfile(profileData).subscribe(
      (response) => {
        console.log('Profil créé avec succès', response);
        // Réinitialiser les champs du formulaire si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la création du profil', error);
      }
    );
  }

}
