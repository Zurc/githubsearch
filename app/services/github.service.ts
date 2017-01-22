import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'a956ebd9fedb6a08f638';
  private client_secret = '8d75ba632c99f5f4906f86d112633b921eb70b67';

  constructor (private _http: Http) {
    console.log('Github Service ready...');
    this.username = 'Zurc';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
           .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
           .map(res => res.json());
  }

  updateUser(username: string){
    this.username = username;
  }
}