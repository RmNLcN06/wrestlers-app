import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrestlerComponent } from '../wrestler/wrestler.component';
import { Wrestler } from '../wrestler';
import { WrestlerService } from '../wrestler.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WrestlerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'assets'

  wrestlerList: Wrestler[] = [];
  wrestleService: WrestlerService = inject(WrestlerService);

  constructor() {
    this.wrestlerList = this.wrestleService.getAllWrestlers();
  }
  // wrestlerList: Wrestler[] = [
  //   {
  //     id: 0,
  //     firstname: 'John',
  //     lastname: 'Cena',
  //     alias: 'The Champ',
  //     age: 47,
  //     state: 'Massachusetts',
  //     city: 'West Newbury',
  //     photo: `${this.baseUrl}/john_cena.jpg`,
  //     retire: false,
  //     injury: false,
  //     federation: 'WWE',
  //     show: "Raw",
  //   },
  //   {
  //     id: 1,
  //     firstname: 'Mark',
  //     lastname: 'Calaway',
  //     alias: 'The Undertaker',
  //     age: 59,
  //     state: 'Texas',
  //     city: 'Houston',
  //     photo: `${this.baseUrl}/the_undertaker.jpg`,
  //     retire: true,
  //     injury: false,
  //     federation: 'WWE',
  //     show: "Smackdown",
  //   },
  //   {
  //     id: 2,
  //     firstname: 'Randy',
  //     lastname: 'Orton',
  //     alias: 'The Viper',
  //     age: 44,
  //     state: 'Tennessee',
  //     city: 'Knoxville',
  //     photo: `${this.baseUrl}/randy_orton.jpg`,
  //     retire: false,
  //     injury: false,
  //     federation: 'WWE',
  //     show: "Raw",
  //   },
  //   {
  //     id: 3,
  //     firstname: 'Dave',
  //     lastname: 'Bautista',
  //     alias: 'The Animal',
  //     age: 55,
  //     state: 'District of Colombia',
  //     city: 'Washington',
  //     photo: `${this.baseUrl}/dave_bautista.jpg`,
  //     retire: true,
  //     injury: false,
  //     federation: 'WWE',
  //     show: "Smackdown",
  //   },
  //   {
  //     id: 4,
  //     firstname: 'Will',
  //     lastname: 'Ospreay',
  //     alias: 'The Aerial Assassin',
  //     age: 31,
  //     state: 'London',
  //     city: 'Rainham',
  //     photo: `${this.baseUrl}/will_ospreay.jpg`,
  //     retire: false,
  //     injury: false,
  //     federation: 'AEW',
  //     show: "Dynamite",
  //   },
  //   {
  //     id: 5,
  //     firstname: 'Trevor',
  //     lastname: 'Mann',
  //     alias: 'Ricochet',
  //     age: 36,
  //     state: 'Illinois',
  //     city: 'Alton',
  //     photo: `${this.baseUrl}/ricochet.jpg`,
  //     retire: false,
  //     injury: false,
  //     federation: 'AEW',
  //     show: "Dynamite",
  //   },
  // ];
}
