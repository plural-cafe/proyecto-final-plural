import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './modules/account/account.module';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CoursesComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, AccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
