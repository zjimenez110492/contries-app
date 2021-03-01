import { ListCountriesComponent } from './components/list-countries/list-countries.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ListCountriesComponent
  },

];

export const AdminRoutes = RouterModule.forChild(routes);
