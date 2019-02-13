import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {User} from './api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private httpService: HttpService) {
  }

  async ngOnInit() {
    this.user = await this.getUserData();
  }

  async getUserData() {
    const response = await this.httpService.get('/api').toPromise();
    console.log(response.wrongData); // Property 'wrongData' does not exist on type 'User'.
    console.log(response.age); // No errors
    return response;
  }
}

