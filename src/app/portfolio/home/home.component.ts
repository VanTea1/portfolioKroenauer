import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BioService } from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  bio$: Observable<any> | undefined; 

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: true },
  ];

  constructor(public bioService: BioService){}

  ngOnInit() {
    this.bio$ = this.bioService.getBio();
  }
}
