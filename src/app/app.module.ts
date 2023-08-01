import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninFormComponent } from './components/forms/signin-form/signin-form.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SimulatorComponent } from './pages/simulator/simulator.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninFormComponent,
    SignupFormComponent,
    AboutComponent,
    AuthComponent,
    NotFoundComponent,
    SimulatorComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
