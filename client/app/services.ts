import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
 
@Injectable()
export class HttpService{

    requestoptions: any;
 
    constructor ( private http: Http){ }
     
    getData(){
        return this.http.get('/get')
    }

    addData(data){
        console.log(JSON.stringify(data))
        this.requestoptions = new RequestOptions({
                method: RequestMethod.Post,
                url: '/add/' + JSON.stringify(data),
                body: JSON.stringify(data)
            });
         this.http.post('/add/' + JSON.stringify(data), this.requestoptions)
          .subscribe(data => {
                console.log(data)
          }, error => {
              console.log(JSON.stringify(error.json()));
          });)
    }
}