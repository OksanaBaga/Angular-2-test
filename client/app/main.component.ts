import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from './services';
import { Router } from '@angular/router';

@Component({
  selector: 'main',  
  templateUrl: `app/main.component.html`,
  providers: [HttpService]  
})
export class MainComponent { 
  
    accounts: [];
     
    constructor(private httpService: HttpService, private _router:Router){}
    ngOnInit(){
         
        this.httpService.getData()
                        .subscribe((data: Response) => {
                          this.accounts=data.json().success;
                          console.log(this.accounts)
                        });
    }

    goToAdd(){
        this._router.navigate(['add']);      
    }

    goToEdit(account){
        console.log(account)
        account.address = 'City';
        this.httpService.editData(account);
    }

    deleteAccount(account){
        console.log(account)
        this.httpService.deleteData(account);
    }
}

