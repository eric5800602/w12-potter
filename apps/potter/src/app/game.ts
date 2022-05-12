export class Game {
    private _total = 0;
    buy(book: number) {
        this._total += book * 100
    }

    get total() {
        return this._total;
    }
}
