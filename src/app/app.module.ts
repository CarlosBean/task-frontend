import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layouts/home/home.component';
import { IndexComponent } from './index/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertToastComponent } from './shared/components/alert-toast/alert-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    IndexComponent,
    AlertToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [AlertToastComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
