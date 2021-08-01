import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
}
  from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, ShadowDom
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element: {type: string; name: string; content: string;};
  @Input() name : string;
  @ViewChild('headerName', {static:true})  headerName : ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph : ElementRef;

  constructor() {
    console.log("constructor!")
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log("ngOnChanges!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit!")
    console.log('Text Content Before View\n' + this.headerName.nativeElement.textContent);
    console.log('Text Content Before Content Init\n' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() { //every after little check...
    console.log("ngDoCheck!")
  }

  ngAfterContentInit() { //just when the <p> content is initialized...
    console.log("ngAfterContentInit!")
    console.log('Text Content After Content Init\n' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked  !")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked  !")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit!")
    console.log('Text Content AfterView:\n' + this.headerName.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy!")
  }
}
