export class Game {
    private _total = 0;
    buy(E1: number,E2: number,E3: number,E4: number,E5: number) {
        let books: number[] = [E1,E2,E3,E4,E5];
        this._total += this.SumDatareduce(books) * 100;
        if( this.SumDatareduce(books) > 1){
            this._total = this._total*(1-(this.SumDatareduce(books)-1)*0.05);
        }
    }

    get total() {
        return this._total;
    }

    public SumDatareduce(arr:number[]){
        return arr.reduce((a,b)=>a+b);  
    }
}
