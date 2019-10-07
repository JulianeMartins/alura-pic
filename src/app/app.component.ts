import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  photos = [
    {
      url: 'https://abrilveja.files.wordpress.com/2016/05/alx_vista_de_mercurio_original5.jpeg',
      description: 'Mercúrio'
    },
    {
      url:'https://www.infoescola.com/wp-content/uploads/2008/04/planeta-v%C3%AAnus_60584053.jpg',
      description:'Vênus'
    }
  ];
}
