import { Component,OnInit } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.css']
})
export class GeneralPageComponent implements OnInit{
  ngOnInit(){
    const popoverTriggerEl = document.querySelector('[data-bs-toggle="popover"]');
    const popover = new bootstrap.Popover(popoverTriggerEl);
  }
}
