import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDashboardComponent } from './customers-dashboard/customers-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: CustomersDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
