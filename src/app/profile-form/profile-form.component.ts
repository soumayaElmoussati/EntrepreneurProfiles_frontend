import { Component, OnInit } from '@angular/core';
import { ProfileCreateService } from '../profile-create.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit{

  profile: Profile = {
    name: '',
    description: '',
    sector: '',
    website:''
  };
  submitted = false;


  profileForm: FormGroup;

  constructor(private profileCreateService: ProfileCreateService) {

    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      sector: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }


  saveTutorial(): void {
    const data = {
      name: this.profile.name,
      description: this.profile.description
    };

    this.profileCreateService.createProfile(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProfile(): void {
    this.submitted = false;
    this.profile = {
      name: '',
      description: '',
      sector: '',
      website:''
    };
  }



}
