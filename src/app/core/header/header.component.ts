import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'Über mich', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'Meine Projekte', homePath: '/', fragment: 'projects', pagePath: '/projects' },
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }


  openWebsite(url: any):void{
    window.open(url, '_blank');
  }
}