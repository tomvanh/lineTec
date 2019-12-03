import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/home/home.component';
import { VerfsoortenComponent } from './verfsoorten/verfsoorten.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'verfsoorten',
    component: VerfsoortenComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent, VerfsoortenComponent ];
