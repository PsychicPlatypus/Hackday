import Figure from "./index";
import ICoordinate from "../coordinate";
import EDirection from "../direction";
import Field from "../field";

describe("Figure class", () => {
    it("should return updated coordinates on down move", () => {
        const startCoordinates: Array<ICoordinate> = [
            { x: 5, y: 20 },
            { x: 6, y: 20 },
            { x: 5, y: 21 },
            { x: 6, y: 21 },
        ];

        const testFigure = new Figure(startCoordinates, new Field(1, 1));

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

        const testFigure = new Figure(startCoordinates, new Field(1, 1));

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

        const testFigure = new Figure(startCoordinates, new Field(1, 1));

        expect(testFigure.move(EDirection.RIGHT)).toEqual([
            { x: 6, y: 20 },
            { x: 7, y: 20 },
            { x: 6, y: 21 },
            { x: 7, y: 21 },
        ]);
    });

    it("should return collision true", () => {
        const testField = new Field(5, 20);
        const collisionCoordinates: Array<ICoordinate> = [
            { x: 2, y: 15 },
            { x: 3, y: 15 },
        ];

        testField.update(collisionCoordinates);

        [
            { xShift: -2, isCollisionExpected: false },
            { xShift: -1, isCollisionExpected: true },
            { xShift: 0, isCollisionExpected: true },
            { xShift: 1, isCollisionExpected: true },
            { xShift: 2, isCollisionExpected: false },
        ].forEach(
            ({ xShift: xShift, isCollisionExpected: isCollisionExpected }) => {
                const figurePlacementCoordinates = collisionCoordinates.map(
                    (coordinates) => ({
                        x: coordinates.x + xShift,
                        y: coordinates.y + 1,
                    })
                );

                const figure = new Figure(
                    figurePlacementCoordinates,
                    testField
                );
                expect(figure.checkCollision()).toEqual(isCollisionExpected);
            }
        );
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
