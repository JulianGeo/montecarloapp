import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  haveAccount = true;

  haveAnAccount(): void {
    this.haveAccount = !this.haveAccount;
  }

}
