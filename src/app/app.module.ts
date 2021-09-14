import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

import { RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
      { path: 'lista', component: ListaComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    DisciplinasComponent,
    ListaComponent
  ],
  bootstrap: [AppComponent],
  providers: [DisciplinasService]
})
export class AppModule {}
