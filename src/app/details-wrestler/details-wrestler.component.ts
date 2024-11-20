import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WrestlerService } from '../wrestler.service';
import { Wrestler } from '../wrestler';

@Component({
  selector: 'app-details-wrestler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-wrestler.component.html',
  styleUrl: './details-wrestler.component.css'
})
export class DetailsWrestlerComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  wrestlerService = inject(WrestlerService);
  wrestler: Wrestler | undefined; 

  constructor() {
    const wrestlerId = Number(this.route.snapshot.params['id']);
    this.wrestler = this.wrestlerService.getWrestlerById(wrestlerId);
  }
}