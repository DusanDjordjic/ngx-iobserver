import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ExtendedNativeElement } from './extended-native-element';

@Directive({
  selector: '[iObserve]',
})
export class NgxIobserverDirective<T> implements OnInit, OnDestroy {
  @Input('iObserve') observer!: IntersectionObserver;
  @Input('createdFrom') createdFrom!: T;
  constructor(private elRef: ElementRef<ExtendedNativeElement<T>>) {}
  ngOnInit(): void {
    if (!this.observer) {
      return console.error(
        'iObserve directive expects IntersectionObserver instance.'
      );
    } else {
      this.elRef.nativeElement.createdFrom = this.createdFrom;
      this.observer.observe(this.elRef.nativeElement);
    }
  }
  ngOnDestroy(): void {
    this.observer.unobserve(this.elRef.nativeElement);
  }
}
