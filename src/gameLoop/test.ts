import GameLoop from "./index";

it("should be able to create square figure", () => {
    const gameLoop = new GameLoop();
    expect(gameLoop).toBeDefined();
});
