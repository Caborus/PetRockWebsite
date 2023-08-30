import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
      { title: 'Day Care', description: 'Give your rock a five-star retreat!', expanded: false },
      { title: 'Erosion Natural Detox', description: 'Nature\'s spa day for your stone!', expanded: false },
      { title: 'Care Box', description: 'A box full of love for your pet stone!', expanded: false },
  ];

  reviews = [
    { content: 'The best service for rock lovers! My pet rock has never been happier.', author: 'John Stone' , img: 'assets/images/happy_face1.webp' },
    { content: 'Absolutely amazing! The care and attention to detail are unparalleled.', author: 'Jane Pebble' , img: 'assets/images/happy_face2.jpeg' },
    { content: 'A must-try for all rock enthusiasts. Exceptional service.', author: 'Rocky Mason' , img: 'assets/images/happy_face3.jpeg' },
];
}

