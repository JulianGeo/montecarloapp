import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  signUpForm: FormGroup;
  user: UserLogin | undefined;


  constructor(
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required,
        //Validator for password, at least 6 characters, at least one letter and one number
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')]),
    });
  }

  onSubmit() {
    this.signUpService.signup(this.signUpForm.value)
    .subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  isFormsInvalid() {
    return this.signUpForm.invalid;
  }

/*   userInitialization(): User {
    const userLoginInfo = this.formReg.value;
    const userPersonalInfo = this.formRegPersonalInfo.value;

    this.user = {
      idNum: userPersonalInfo.idNum,
      name: userPersonalInfo.name,
      lastname: userPersonalInfo.lastname,
      email: userLoginInfo.email,
      password: userLoginInfo.password,
    }

    //console.log(this.user);
    return this.user;
  } */

/*   userApiPost(response: UserCredential){
    this.userApiService.post(
      this.userInitialization()
    ).subscribe((answer) =>{
      console.log(answer);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `User with ID: ${answer.id} has been created in the backend DB,
        and in the firebase DB with the email ${response.user.email}`,
        showConfirmButton: true
      })
      this.router.navigate(['/login']);
    })

  } */


}
