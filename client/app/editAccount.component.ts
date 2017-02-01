import { Component } from '@angular/core';
import { HttpService } from './services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'add-account',
    templateUrl: `app/editAccount.component.html`,
    providers: [HttpService]
})
export class EditAccountComponent {

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

    constructor(private route: ActivatedRoute, private httpService: HttpService) {
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

    ngOnInit() {
        this.route.params
            .map(params => params['account'])
            .subscribe((account) => {
                this.account = JSON.parse(account);
            });
    }

    submit() {
        this.httpService.editData(this.account);
    }
}