import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'newcomposition', loadChildren: './newcomposition/newcomposition.module#NewcompositionPageModule' },
  { path: 'editor', loadChildren: './editor/editor.module#EditorPageModule' },
  { path: 'editor/:id', loadChildren: './editor/editor.module#EditorPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}