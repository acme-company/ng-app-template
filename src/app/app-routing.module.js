import { RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from "./shared/not-found.component";
import { WelcomeComponent } from "./welcome.component";
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    { path: 'inbox', loadChildren: './modules/inbox/inbox.module.ts#InboxModule' },
    { path: '**', component: NotFoundComponent }
];
export var AppRoutingModule = RouterModule.forRoot(appRoutes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
});
//# sourceMappingURL=app-routing.module.js.map