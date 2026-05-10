import { Component, input } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() count !: number;
  @Output() incrementEvent = new EventEmitter<number>()
  changeCount(value: number){
    // this.count++;
    this.incrementEvent.emit(value);
  }
}
