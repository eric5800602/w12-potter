export class Game {
    private _total = 0;
    buy(E1: number,E2: number,E3: number,E4: number,E5: number) {
        this._total += E1 * 100;
    }

    get total() {
        return this._total;
    }
}
