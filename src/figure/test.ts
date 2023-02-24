import Figure from "./index";
import ICoordinate from "../coordinate";
import EDirection from "../direction";

describe("Figure class", () => {
    it("should return updated coordinates on down move", () => {
        const startCoordinates: Array<ICoordinate> = [
            { x: 5, y: 20 },
            { x: 6, y: 20 },
            { x: 5, y: 21 },
            { x: 6, y: 21 },
        ];

        const testFigure = new Figure(startCoordinates);

        expect(testFigure.move(EDirection.DOWN)).toEqual([
            { x: 5, y: 19 },
            { x: 6, y: 19 },
            { x: 5, y: 20 },
            { x: 6, y: 20 },
        ]);
    });

    it("should return updated coordinates on left move", () => {
        const startCoordinates: Array<ICoordinate> = [
            { x: 5, y: 20 },
            { x: 6, y: 20 },
            { x: 5, y: 21 },
            { x: 6, y: 21 },
        ];

        const testFigure = new Figure(startCoordinates);

        expect(testFigure.move(EDirection.LEFT)).toEqual([
            { x: 4, y: 20 },
            { x: 5, y: 20 },
            { x: 4, y: 21 },
            { x: 5, y: 21 },
        ]);
    });

    it("should return updated coordinates on right move", () => {
        const startCoordinates: Array<ICoordinate> = [
            { x: 5, y: 20 },
            { x: 6, y: 20 },
            { x: 5, y: 21 },
            { x: 6, y: 21 },
        ];

        const testFigure = new Figure(startCoordinates);

        expect(testFigure.move(EDirection.RIGHT)).toEqual([
            { x: 6, y: 20 },
            { x: 7, y: 20 },
            { x: 6, y: 21 },
            { x: 7, y: 21 },
        ]);
    });
});

describe("Coordinate interface", () => {
    it("should be an interface", () => {
        const a: ICoordinate = {
            x: 1,
            y: 2,
        };
    });
});
