import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHelloWorldComponent } from './components/add-helloworld/add-hello-world.component';
import { HelloWorldListComponent } from './components/helloworld-list/hello-world-list.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HelloWorldDetailsComponent } from './components/helloworld-details/hello-world-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHelloWorldComponent,
    HelloWorldListComponent,
    HelloWorldDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
