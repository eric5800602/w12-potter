export class Game {
    private _total = 0;
    buy(E1: number,E2: number,E3: number,E4: number,E5: number) {
        this._total += (E1+E2+E3+E4+E5) * 100;
        if( (E1+E2+E3+E4+E5) > 1){
            this._total = this._total*(1-(E1+E2+E3+E4+E5-1)*0.05);
        }
    }

    get total() {
        return this._total;
    }
}
