import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider-card.component.html',
  styleUrl: './slider-card.component.scss'
})
export class SliderCardComponent {

  responsiveOptions = [
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];


  slides = [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
  ]
}
