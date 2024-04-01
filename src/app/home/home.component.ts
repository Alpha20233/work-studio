import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from "gsap";
import { TextAccessService } from '../../Providers/text-access.service';
import LocomotiveScroll from 'locomotive-scroll';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('text') textElement: ElementRef<HTMLDivElement>;

  constructor(private textAccessService: TextAccessService) { }

  ngOnInit() {
    const locomotiveScroll = new LocomotiveScroll();
    
    var page = document.querySelector('#imgPage') as HTMLElement;
    page.style.backgroundImage = `url('')`;
    var element = document.querySelectorAll('.element');
    element.forEach((e) => {
      e.addEventListener(('mouseenter'), function () {
        var bgImage = e.getAttribute("data-img");
        page.style.backgroundImage = `url(${bgImage})`;
      })
      e.addEventListener(('mouseleave'), function () {
        page.style.backgroundImage = `url('')`;
      })
    })
  }

  ngAfterViewInit() {
    this.textAccessService.setTextElement('text', this.textElement.nativeElement);
  }


  ngOnDestroy() { }
}

