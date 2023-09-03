import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent implements OnInit {
  profiles: any[] = [];
  profileToDeleteId: number | null = null;
  showModal = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }


  loadProfiles(): void {
    this.profileService.getProfiles().subscribe(
      (profiles) => {
        this.profiles = profiles;
      },
      (error) => {
        console.error('Erreur lors du chargement des profils', error);
      }
    );
  }

  openDeleteConfirmation(profileId: number) {
    // Utilisez un service ou une méthode pour afficher la modal de confirmation
    // Vous pouvez stocker l'ID du profil à supprimer dans une variable de composant
    this.showModal = true;
    this.profileToDeleteId = profileId;
    console.log('fgdfdgh',profileId)
  }

  deleteProfile() {
    if (this.profileToDeleteId !== null) {
      this.profileService.deleteProfile(this.profileToDeleteId).subscribe(
        () => {
          // La suppression a réussi
          // Mettez à jour la liste des profils ou effectuez d'autres actions nécessaires
          // Réinitialisez profileToDeleteId à null après la suppression
          this.profileToDeleteId = null;
        },
        (error) => {
          console.error('Erreur lors de la suppression du profil', error);
        }
      );
    }
  }



}
