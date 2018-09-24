import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HelpComponent, AppDialog } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { InfoComponent } from './components/info/info.component';
import { ComponentsMaterial } from './components.material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    HomeComponent,
    ListComponent,
    InfoComponent,
    AppDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsMaterial
  ],
  entryComponents: [
    AppDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
