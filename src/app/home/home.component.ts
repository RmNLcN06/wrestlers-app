import { Component } from '@angular/core';
import { WrestlerComponent } from '../wrestler/wrestler.component';
import { Wrestler } from '../wrestler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WrestlerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'assets'

  wrestler: Wrestler = {
    id: 1,
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
  };
}
