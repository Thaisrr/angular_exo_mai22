import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GamesFilterPipe } from './utils/pipes/games-filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import { LibraryComponent } from './pages/library/library.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    GamesFilterPipe,
    LibraryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
