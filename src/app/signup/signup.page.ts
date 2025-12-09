import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false
})
export class SignupPage implements OnInit {

  user = {
    email: '',
    password: '',
    role: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {}

  register() {
    if (this.user.role === 'developer') {
      this.router.navigate(['/profile-dev']);
    } else if (this.user.role === 'entrepreneur') {
      this.router.navigate(['/profile-entrepreneur']);
    } else {
      alert('Veuillez choisir un rôle');
    }
  }

}
