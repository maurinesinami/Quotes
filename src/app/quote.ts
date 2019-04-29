export class Quote {
   
    public showQuote:boolean;
    constructor( public quoteText:string,public author:string, public name:string, public dislike:number, public like:number,public completeDate:Date){
        this.showQuote=false
    }
}
