import { Injectable } from '@angular/core';
import { Wrestler } from './wrestler';

@Injectable({
  providedIn: 'root'
})
export class WrestlerService {

  // readonly baseUrl = 'assets'
  url = 'http://localhost:3000/wrestlers';

  async getAllWrestlers(): Promise<Wrestler[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getWrestlerById(id: number): Promise<Wrestler | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? [];
  }

  constructor() { }
}
