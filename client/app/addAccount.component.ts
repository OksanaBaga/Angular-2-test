import { Component } from '@angular/core';
import { HttpService } from './services';

@Component({
    selector: 'add-account',
    templateUrl: `app/addAccount.component.html`,
    providers: [HttpService]
})
export class AddAccountComponent {

    account: {
        id: any,
        accountName: any,
        address: any,
        phone: any,
        fax: any,
        city: any,
        info: any,
        contactName: any
    }

    constructor(private httpService: HttpService) {
        this.account = {
            id: 0,
            accountName: "",
            address: "",
            phone: "",
            fax: "",
            city: "",
            info: "",
            contactName: ""
        }
    }

    submit(){
        this.httpService.addData(this.account);
    }
}