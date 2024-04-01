import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import gsap from "gsap";
import { HomeComponent } from './home/home.component';
import { Subscription } from 'rxjs';
import { TextAccessService } from '../Providers/text-access.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'loco';
  subscription: Subscription;
  text: any

  constructor(private textAccessService: TextAccessService) { }

  ngOnInit() {
    const locomotiveScroll = new LocomotiveScroll();
    locomotiveScroll.scrollTo(0);
    window.scrollTo(0,0)
    
  }


  ngAfterViewInit() {
    var tl = gsap.timeline();
    tl.to('#loader', {
      y: '-100%',
      ease: 'expo.out',
      duration: 0.6,
      delay: 0.3
    })

    tl.to('#vid', {
      y: '-100%',
      display: 'none',
      ease: 'power2.out',
      duration: 0.5,
      delay: 0.3
    }, "anim")

    // var test = this.renderer.selectRootElement('#text');
    this.subscription = this.textAccessService.text$.subscribe(elements => {
      if (elements) {
        const textElement = elements['text'];
        tl.to(textElement, {
          color: "white",
          ease: 'power2.out',
          delay: -0.6
        }, "anim")

        tl.from(textElement, {
          color: "black",
          ease: 'power2.inOut',
          delay: 0.3
        }, "anim")
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
