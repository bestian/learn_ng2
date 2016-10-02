import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { SearchConceptByPipe } from './search-concept-by.pipe';
import { DecorateRPipe } from './decorate-r.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConceptsComponent,
    TestDirectiveDirective,
    SearchConceptByPipe,
    DecorateRPipe
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
