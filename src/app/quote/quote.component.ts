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
       quotes=[
        new Quote('Starve your distractions,feed your focus','MAURINE','SINAMI',0,0,new Date(2019,3,29))
      ]
      addQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        
      quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)
       }
  
    
    
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
