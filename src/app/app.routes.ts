import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AnimalInfoComponent } from './pages/animal-info/animal-info.component';
import { AnimalEditComponent } from './pages/animal-edit/animal-edit.component';
import { AnimalAddComponent } from './pages/animal-add/animal-add.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CrudAddComponent } from './pages/crud-add/crud-add.component';
import { CrudListComponent } from './pages/crud-list/crud-list.component';
import { CrudEditComponent } from './pages/crud-edit/crud-edit.component';
import { CatsListComponent } from './pages/cats-list/cats-list.component';
import { DogsListComponent } from './pages/dogs-list/dogs-list.component';
import { OthersListComponent } from './pages/others-list/others-list.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { VisitComponent } from './pages/visit/visit.component';
import { state } from '@angular/animations';
import { StatuteComponent } from './pages/statute/statute.component';
import { TaxComponent } from './pages/tax/tax.component';

export const routes: Routes = [{path: "", component: MainComponent},
{path: "animals/info/:id", component: AnimalInfoComponent},
{path: "animals/edit/:id", component: AnimalEditComponent},
{path: "animals/add", component: AnimalAddComponent},
{path: "changePassword", component: ChangePasswordComponent},
{path: "contact", component: ContactComponent},
{path: "crud/add", component: CrudAddComponent},
{path: "crud", component: CrudListComponent},
{path: "crud/edit/:id", component: CrudEditComponent},
{path: "animals/cats", component: CatsListComponent},
{path: "animals/dogs", component: DogsListComponent},
{path: "animals", component: OthersListComponent},
{path: "faq", component: FaqComponent},
{path: "login", component: LoginComponent},
{path: "register", component: RegisterComponent},
{path: "resetPassword", component: ResetPasswordComponent},
{path: "statute", component: StatuteComponent},
{path: "visit", component: VisitComponent},
{path: "volunteers", component: VolunteersComponent},
{path: "tax", component: TaxComponent}];
