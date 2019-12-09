import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.tarefaConcluida){
      // tslint:disable-next-line: quotemark
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
