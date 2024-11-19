import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wrestler } from '../wrestler';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wrestler',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wrestler.component.html',
  styleUrl: './wrestler.component.css'
})
export class WrestlerComponent {
  @Input() wrestler!: Wrestler;
}
