import { Component, Input } from '@angular/core';
import { Wrestler } from '../wrestler';

@Component({
  selector: 'app-wrestler',
  standalone: true,
  imports: [],
  templateUrl: './wrestler.component.html',
  styleUrl: './wrestler.component.css'
})
export class WrestlerComponent {
  @Input() wrestler!: Wrestler;
}
