import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote:Quote
  @Output() like= new EventEmitter<boolean>();
    //toogleDetails(index){
       //this.quote[index].showQuote = !this.quote[index].showQuote;
  
  
    
    
  // }
  upvote:number=0;
  downvote:number=0;
  thumbsUp(){
    this.upvote++;
  }
  
  thumbsDown(){
    this.downvote++;
  }

  constructor() { }
  ngOnInit() {
  }

}
