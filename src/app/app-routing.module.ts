import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profile-dev',
    loadChildren: () => import('./profile-dev/profile-dev.module').then( m => m.ProfileDevPageModule)
  },
  {
    path: 'profile/entrepreneur',
    loadChildren: () => import('./profile-entrepreneur/profile-entrepreneur.module').then( m => m.ProfileEntrepreneurPageModule)
  },
  {
    path: 'project/publish',
    loadChildren: () => import('./publier-projet/publier-projet.module').then( m => m.PublishProjectPageModule)
  },
  {
    path: 'postulation',
    loadChildren: () => import('./postulation/postulation.module').then( m => m.PostulationPageModule)
  },
  {
    // fixme: pas besoin de page pour le logout, un bouton suffit, appel le back, 
    // vide le local storage et redirige vers la page d'accuil
    path: 'signout', 
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./login/login.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
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
