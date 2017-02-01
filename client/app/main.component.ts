import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from './services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: `app/main.component.html`,
    providers: [HttpService]
})
export class MainComponent {

    accounts: [];

    constructor(private httpService: HttpService, private _router: Router, private route: ActivatedRoute, ) { }
    ngOnInit() {

        this.httpService.getData()
            .subscribe((data: Response) => {
                this.accounts = data.json().success;
            });
    }

    goToAdd() {
        this._router.navigate(['add']);
    }

    goToEdit(account) {
        var obj = JSON.stringify(account);
        this._router.navigate(['edit', { account: obj }], { relativeTo: this.route });
    }

    deleteAccount(account) {
        this.httpService.deleteData(account).subscribe((data: Response) => {
            this.accounts = data.json().success;
        });
    }
}

