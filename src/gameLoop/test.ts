import Field from "../field";
import GameLoop from "./index";

it("should be able to create square figure", () => {
    const field = new Field(5, 20);
    const gameLoop = new GameLoop(field);
    expect(gameLoop).toBeDefined();
});
