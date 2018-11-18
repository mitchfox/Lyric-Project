import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';

const routes: Routes = [
  // , canActivate: [TutorialGuard]       add to '' path for tutorials before tabs using gaurd bool
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'editor', loadChildren: './editor/editor.module#EditorPageModule' },
  { path: 'editor/:id', loadChildren: './editor/editor.module#EditorPageModule' },
  { path: 'inspiration', loadChildren: './inspiration/inspiration.module#InspirationPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
