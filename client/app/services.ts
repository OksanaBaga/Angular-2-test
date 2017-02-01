import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Router} from '@angular/router';

 
@Injectable()
export class HttpService{

    requestoptions: any;
 
    constructor ( private http: Http, private _router:Router){ }
     
    getData(){
        return this.http.get('/get')
    }
    
    addData(data){        
         this.http.post('/add/' + JSON.stringify(data))
          .subscribe(res => {
                this._router.navigate(['']);
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
    }

    editData(data){
        this.http.post('/edit/' + JSON.stringify(data))
          .subscribe(res => {
                this._router.navigate(['']);
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
    }

    deleteData(data){
        return this.http.post('/delete/' + JSON.stringify(data));
    }
    
}