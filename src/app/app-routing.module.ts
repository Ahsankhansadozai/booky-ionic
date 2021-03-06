import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { IsLoginGuard } from './../sdk/custom/guards/islogin.guard';
import { NgModule } from '@angular/core';
import { RedirectLoginGuard } from './../sdk/custom/guards/redirectlogin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    canActivate: [RedirectLoginGuard],
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [RedirectLoginGuard],
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'books',
    canActivate: [IsLoginGuard],
    loadChildren: () =>
      import('./books/books.module').then(m => m.BooksPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
