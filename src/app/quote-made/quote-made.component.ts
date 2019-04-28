import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-made',
  templateUrl: './quote-made.component.html',
  styleUrls: ['./quote-made.component.css']
})
export class QuoteMadeComponent implements OnInit {
  @Input() quotes:Quote[];
  @Output() like= new EventEmitter<boolean>();
  @Output() dislike = new EventEmitter<boolean>();
  
  thumbsUp(upvoting:boolean){
    this.like.emit(upvoting);
  }
  thumbsDown(downvoting:boolean){
    this.like.emit(downvoting);
  }
  constructor() { }

  ngOnInit() {
  }

}
