import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
 
@Injectable()
export class HttpService{
 
    constructor ( private http: Http){ }
     
    getData(){
        return this.http.get('/get')
    }

    addData(data){
        console.log(JSON.stringify(data))
        this.requestoptions = new RequestOptions({
                method: RequestMethod.Post,
                url: "/add",
                headers: this.headers,
                body: JSON.stringify(data)
            });
         this.http.post(this.requestoptions)
          .subscribe(data => {
                console.log(data)
          }, error => {
              console.log(JSON.stringify(error.json()));
          });)
    }
}