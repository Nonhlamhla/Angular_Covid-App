import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts;

  constructor(
    private http: HttpClient
  ) {
    // PARAMS e.g 1
    // CALLS ALL PARAMS BELOGING TO userId=1
    // tslint:disable-next-line: prefer-const
    let params = new HttpParams().set('userId', '1');
    // JSONPLACEHOLDER API IS THE ONE WE ARE USING HERE FOR OUR 'Http Requests & API'
    this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1', {params }).subscribe((value: any) => {
      this.posts = value;
      console.log(this.posts = value, 'FOUND DATA');
    });
   }

    // PARAMS e.g 2
    // CALLS ALL PARAMS "POSTS" BELOGING TO userId=68
    // tslint:disable-next-line: prefer-const
    // let params = new HttpParams().set('id', '68');
    // // JSONPLACEHOLDER API IS THE ONE WE ARE USING HERE FOR OUR 'Http Requests & API'
    // this.http.get('https://jsonplaceholder.typicode.com/posts', { params }).subscribe((value: any) => {
    // this.posts = value;
    // console.log(this.posts = value, 'FOUND DATA');
    // });
    // }

  title = 'covid-app';
}
