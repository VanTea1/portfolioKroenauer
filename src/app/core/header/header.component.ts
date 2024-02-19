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

  navItems = [
    { title: 'Über mich', homePath: '/', fragment: 'about', pagePath: '/ueber' },
    { title: 'Meine Projekte', homePath: '/', fragment: 'projects', pagePath: '/projekte' },
  ]

  constructor(private bioService: BioService, private headerService: HeaderService) { }



}
