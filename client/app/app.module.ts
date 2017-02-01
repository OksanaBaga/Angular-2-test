import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./routes";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { AppComponent }  from './app.component';
import { MainComponent }  from './main.component';
import { AddAccountComponent } from './addAccount.component';
import { EditAccountComponent } from './editAccount.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, MainComponent, AddAccountComponent, EditAccountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
