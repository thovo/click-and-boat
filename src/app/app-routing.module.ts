import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoatComponent } from './components/add-boat/add-boat.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-boat',
    component: AddBoatComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
