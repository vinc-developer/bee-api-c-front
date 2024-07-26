import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ApicultureComponent } from "./pages/apiculture/apiculture.component";
import { AboutComponent } from "./pages/about/about.component";
import { MielsComponent } from "./pages/miels/miels.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { FaComponent } from "./pages/fa/fa.component";
import { TracabiliteComponent } from "./pages/tracabilite/tracabilite.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'apiculture',
    component: ApicultureComponent
  },
  {
    path: 'qui-sommes-nous',
    component: AboutComponent
  },
  {
    path: 'miels',
    component: MielsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'frelon-asiatique',
    component: FaComponent
  },
  {
    path: 'tracabilite/:id',
    component: TracabiliteComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
