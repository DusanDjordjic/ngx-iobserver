import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[iObserve]',
})
export class NgxIobserverDirective implements OnInit, OnDestroy {
  @Input('iObserve') observer!: IntersectionObserver;
  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {
    if (!this.observer) {
      return console.error(
        'iObserve directive expects IntersectionObserver instance.'
      );
    } else {
      this.observer.observe(this.elRef.nativeElement);
    }
  }
  ngOnDestroy(): void {
    this.observer.unobserve(this.elRef.nativeElement);
  }
}
