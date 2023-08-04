import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ngbd-carousel-navigation',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() showText = true;
  @Input() showButton = true;
  @Input() images: string[] = [''];
  pauseOnHover = false;
  pauseOnFocus = false;
  showNavigationIndicators = false;
  showNavigationArrows = false;
  // [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
