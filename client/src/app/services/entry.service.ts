import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Entry } from '../models';

@Injectable()
export class EntryService {
  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  getAll() {
    return this.http.get<Entry[]>(this.apiUrl + 'entries');
  }

  getById(id: string) {
    return this.http.get<Entry>(this.apiUrl + 'entries/' + id);
  }

  getByUserId(id: string) {
    // need api url fix
    return this.http.get<Entry[]>(this.apiUrl + 'entries/' + id + '?q=user');
  }

  getByUserIdAndDate(id: string, date: string) {
    return this.http.get<Entry[]>(this.apiUrl + `entries/master/${id}?date='${date}'`);
  }

  create(entry: Entry) {
    return this.http.post<Entry>(this.apiUrl + 'entries', entry);
  }

  update(entry: Entry, id: string) {
    return this.http.put<Entry>(this.apiUrl + 'entries/' + id, entry);
  }
}
