import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { SimulatorComponent } from './pages/simulator/simulator.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'aboutme',
    component: AboutComponent
  },
  {
    path: 'simulator',
    canActivate: [authGuard],
    component: SimulatorComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
