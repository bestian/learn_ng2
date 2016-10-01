import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { TestDirectiveDirective } from './test-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConceptsComponent,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
