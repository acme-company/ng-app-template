import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { InboxComponent } from "./inbox.component";

const inboxRoutes: Routes = [
  { path: '', component: InboxComponent}
];

export const InboxRoutingModule = RouterModule.forChild(inboxRoutes);

