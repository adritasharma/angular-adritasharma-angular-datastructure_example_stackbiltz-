import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ArrayLeftRotationComponent } from "./array-left-rotation/array-left-rotation.component";
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, ArrayLeftRotationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
