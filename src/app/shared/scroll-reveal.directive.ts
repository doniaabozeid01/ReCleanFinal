import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit, OnDestroy {

  @Input('appScrollReveal') animation: 'from-bottom' | 'from-left' | 'from-right' | 'fade' = 'from-bottom';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    this.renderer.addClass(this.el.nativeElement, `reveal-${this.animation}`);

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
