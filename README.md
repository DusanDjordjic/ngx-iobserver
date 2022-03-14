# Ngx - Iobserver

This library helps you utilize javascript's intersection observer API by adding `iObserve`directive.

## How to use

Simply add the `iObserve` directive to any HTML tag that you want to observe and to it pass an instance of `IntersectionObserver`. The directive will add that element to the list of entries of the passed IntersectionObserver instance.

`example.component.html`

```html
<div class="example-section" [iObserve]="myObserver">
  <h1>Hello world 1</h1>
</div>
<div class="example-section" [iObserve]="myObserver">
  <h1>Hello world 2</h1>
</div>
<div class="example-section" [iObserve]="myObserver">
  <h1>Hello world 3</h1>
</div>
```

`example.component.css`

```css
.example-section{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100vw)
    transition: transform 2s
}
.example-section.active{
    transform: translateX(0vw)
}
```

`example.component.ts`

```typescript
export class ExampleComponent {
  myObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { root: null, rootMargin: "-100px" }
  );
}
```
