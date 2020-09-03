import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: SigninComponent, },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }