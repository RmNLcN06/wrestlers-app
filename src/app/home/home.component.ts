import { Component } from '@angular/core';
import { WrestlerComponent } from '../wrestler/wrestler.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WrestlerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
