import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from './services';

@Component({
  selector: 'my-app',  
  templateUrl: `app/app.component.html`,
  providers: [HttpService] 
})
export class AppComponent implements OnInit { 
  
    accounts: [];
     
    constructor(private httpService: HttpService){}
    ngOnInit(){
         
        this.httpService.getData()
                        .subscribe((data: Response) => {
                          this.accounts=data.json().success;
                          console.log(this.accounts)
                        }));
    }

    add(){
      var data = {
        id: 3, 
        accountName: "Test 3", 
        address: "USA", 
        phone: "443", 
        fax: "test@com", 
        city:"New-York", 
        info:"test", 
        contactName:"Andrew"
      }
      this.httpService.addData(data)
                        .subscribe((data: Response) => {
                          // this.accounts=data.json().success;
                          console.log(data)
                        }));
    }
}

