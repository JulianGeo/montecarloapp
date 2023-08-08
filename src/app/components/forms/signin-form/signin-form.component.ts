import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent {

  formLogin: FormGroup;

  constructor(
    private signInService: SignInService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null)
    })
  }


  onSubmit(): void {
    this.signInService.signin(this.formLogin.value)
    .subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (console.log),
      complete: (console.log)
    })




/*     this.userService.login(this.formLogin.value)
      .then(response => {
        this.fetchUserData();
        this.router.navigate(['/main'])
      })
      .catch(error => console.log(error)); */
      console.log("submit")
  }

}
