import { Game } from './game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });
  // game.spec.ts
  test('Buy one', () => {
    game.buy(1,0,0,0,0);
    expect(game.total).toBe(100);
  });

  test('Buy one E1 and one E2', () => {
    game.buy(1,1,0,0,0);
    expect(game.total).toBe(190);
  });

  test('Buy one E1 and two E2', () => {
    game.buy(1,2,0,0,0);
    expect(game.total).toBe(290);
  });
});
