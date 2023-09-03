import { Component, OnInit } from '@angular/core';
import { ProfileCreateService } from '../profile-create.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit{
  profileForm: FormGroup;

  constructor(private router: Router, private profileCreateService: ProfileCreateService,private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      sector: ['', Validators.required],
      site: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      this.profileCreateService.createProfile(formData).subscribe(
        (response) => {
          // Gérer la réussite de la création du profil (par exemple, afficher un message de succès).
          console.log('Profil créé avec succès :', response);
          this.router.navigate(['/profiles']);
        },
        (error) => {
          // Gérer les erreurs de création de profil (par exemple, afficher un message d'erreur).
          console.error('Erreur lors de la création du profil :', error);
        }
      );
    } else {
      // Marquer les champs comme "touched" pour afficher les messages d'erreur.
      this.profileForm.markAllAsTouched();
    }
  }
  

  


}
