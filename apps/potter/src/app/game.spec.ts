import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });
  // game.spec.ts
  test('Buy one', () => {
    const game = new Game();
    game.buy(1,0,0,0,0);
    expect(game.total).toBe(100);
  });

  test('Buy one E1 and one E2', () => {
    const game = new Game();
    game.buy(1,1,0,0,0);
    expect(game.total).toBe(190);
  });
});
