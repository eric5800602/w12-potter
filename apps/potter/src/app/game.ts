export class Game {
    private _total = 0;
    buy(E1: number,E2: number,E3: number,E4: number,E5: number) {
        let books: number[] = [E1,E2,E3,E4,E5];
        // this._total += this.SumDatareduce(books) * 100;
        // if( this.SumDatareduce(books) > 1){
        //     this._total = this._total*(1-(this.SumDatareduce(books)-1)*0.05);
        // }
        let discount: number[] = [0.95,0.9,0.8,0.75];
        while(this.SumDatareduce(books) > 0){
            var num:number = 0;
            var diff:number = 0;
            var price_round:number = 0;
            for(num = 0;num < 5;num++){
                if(books[num] > 0){
                    books[num]--;
                    diff++;
                }
            }
            if(diff > 1){
                price_round += diff * 100 * discount[diff-2];
            }
            else {
                price_round += diff * 100;
            }
            this._total += price_round;
        }
    }

    get total() {
        return this._total;
    }

    public SumDatareduce(arr:number[]){
        return arr.reduce((a,b)=>a+b);  
    }
}
