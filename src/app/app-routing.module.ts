import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibraryComponent} from "./pages/library/library.component";
import {DetailsComponent} from "./pages/details/details.component";

const routes: Routes = [
  {path: '', component: LibraryComponent, pathMatch: 'full'},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
