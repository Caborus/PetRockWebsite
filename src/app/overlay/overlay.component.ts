import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent { 
  routerlink_list = [
    {name: 'about', url: '/about'},
    {name: 'blog', url: '/blog'},
    {name: 'careers', url: '/careers'},
    {name: 'pricing', url: '/pricing'},
    {name: 'contact', url: '/contact'}
  ]
}