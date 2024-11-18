import { Injectable } from '@angular/core';
import { Wrestler } from './wrestler';

@Injectable({
  providedIn: 'root'
})
export class WrestlerService {

  readonly baseUrl = 'assets'

  wrestlerList: Wrestler[] = [
    {
      id: 0,
      firstname: 'John',
      lastname: 'Cena',
      alias: 'The Champ',
      age: 47,
      state: 'Massachusetts',
      city: 'West Newbury',
      photo: `${this.baseUrl}/john_cena.jpg`,
      retire: false,
      injury: false,
      federation: 'WWE',
      show: "Raw",
    },
    {
      id: 1,
      firstname: 'Mark',
      lastname: 'Calaway',
      alias: 'The Undertaker',
      age: 59,
      state: 'Texas',
      city: 'Houston',
      photo: `${this.baseUrl}/the_undertaker.jpg`,
      retire: true,
      injury: false,
      federation: 'WWE',
      show: "Smackdown",
    },
    {
      id: 2,
      firstname: 'Randy',
      lastname: 'Orton',
      alias: 'The Viper',
      age: 44,
      state: 'Tennessee',
      city: 'Knoxville',
      photo: `${this.baseUrl}/randy_orton.jpg`,
      retire: false,
      injury: false,
      federation: 'WWE',
      show: "Raw",
    },
    {
      id: 3,
      firstname: 'Dave',
      lastname: 'Bautista',
      alias: 'The Animal',
      age: 55,
      state: 'District of Colombia',
      city: 'Washington',
      photo: `${this.baseUrl}/dave_bautista.jpg`,
      retire: true,
      injury: false,
      federation: 'WWE',
      show: "Smackdown",
    },
    {
      id: 4,
      firstname: 'Will',
      lastname: 'Ospreay',
      alias: 'The Aerial Assassin',
      age: 31,
      state: 'London',
      city: 'Rainham',
      photo: `${this.baseUrl}/will_ospreay.jpg`,
      retire: false,
      injury: false,
      federation: 'AEW',
      show: "Dynamite",
    },
    {
      id: 5,
      firstname: 'Trevor',
      lastname: 'Mann',
      alias: 'Ricochet',
      age: 36,
      state: 'Illinois',
      city: 'Alton',
      photo: `${this.baseUrl}/ricochet.jpg`,
      retire: false,
      injury: false,
      federation: 'AEW',
      show: "Dynamite",
    },
  ];

  getAllWrestlers(): Wrestler[] {
    return this.wrestlerList;
  }

  getWrestlerById(id: number): Wrestler | undefined {
    return this.wrestlerList.find((wrestler) => wrestler.id === id);
  }

  constructor() { }
}
