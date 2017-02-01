import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'my-app',  
  template: `<div>
        <router-outlet></router-outlet>
      </div>` 
})
export class AppComponent { }

