import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiInterfaceD} from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(path: keyof ApiInterfaceD) {
    return this.httpClient.get<ApiInterfaceD[typeof path]['get']>(path);
  }

  post(path: keyof ApiInterfaceD, data) {
    return this.httpClient.post<ApiInterfaceD[typeof path]['post']>(path, data);
  }

  put(path: keyof ApiInterfaceD, data) {
    return this.httpClient.put<ApiInterfaceD[typeof path]['put']>(path, data);
  }

  delete(path: keyof ApiInterfaceD, data) {
    return this.httpClient.delete<ApiInterfaceD[typeof path]['delete']>(path, data);
  }
}
