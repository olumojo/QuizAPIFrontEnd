import { Directive, ElementRef, Renderer, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[hmhighlight]'
})
export class HighlightDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer){

    }

    @HostBinding('class.hgh') private ishovering: boolean;

    @HostListener('mouseleave') onMouseOut () {
        this.ishovering = false;
    }
    @HostListener('mouseover') onMouseOver () {
        this.ishovering = true;
    }
}