//import { Component, OnInit } from '@angular/core';

//@Component({
  //selector: 'app-inscription',
  //templateUrl: './inscription.page.html',
  //styleUrls: ['./inscription.page.scss'],
//})
//export class InscriptionPage implements OnInit {

 // constructor() { }

  //ngOnInit() {
 // }

//}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class SigninPage implements OnInit {

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
