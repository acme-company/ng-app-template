import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { InboxComponent } from "./modules/inbox/inbox.component";
import { NotFoundComponent } from "./shared/not-found.component";
import { WelcomeComponent } from "./welcome.component";


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'inbox', loadChildren: './modules/inbox/inbox.module.ts#InboxModule' },
  { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, { 
  useHash: true,
  preloadingStrategy: PreloadAllModules,
  enableTracing: true
});

