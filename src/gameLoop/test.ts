import Field from "../field";
import GameLoop from "./index";
import { createSquare } from "../figureFactory";

it("should be able to create square figure", () => {
    const field = new Field(5, 20);
    const gameLoop = new GameLoop(field);
    expect(gameLoop).toBeDefined();
});

it("should move the figure downwards after a single step", () => {
    const field = new Field(5, 20);
    const gameLoop = new GameLoop(field);
    const figure = createSquare(field);
    const currentFigureCoordinates = figure.coordinates;

    gameLoop.figure = figure;
    gameLoop.step();
    expect(gameLoop.figure.coordinates).not.toEqual(currentFigureCoordinates);
});
