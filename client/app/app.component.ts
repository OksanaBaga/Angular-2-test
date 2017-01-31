import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { browser, element, by } from 'protractor';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
})
export class AppComponent {
  constructor(public http: Http) {

  }

  ngAfterContentInit(): void {
    // this.http.get('/lists', (res:Response) => res.json()).subscribe(
    // 		(res: any) => {
    // 			if(res){						
    // 				console.log(res)
    // 			}else{
    // 				console.log(res)
    // 			}
    // 		},
    // 		(error: any) => {
    // 			console.log(error.json());
    // });

    this.http.get('/lists')
    .map(res => res.text())
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Random Quote Complete')
    );
  }
}

