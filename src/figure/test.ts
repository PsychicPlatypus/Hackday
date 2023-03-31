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
                expect(figure.checkCollision(EDirection.DOWN)).toEqual(
                    isCollisionExpected
                );
            }
        );
    });

    it("should update field or figure if there is collision rightwards", () => {
        const collisionCoordinates: Array<ICoordinate> = [
            { x: 3, y: 15 },
            { x: 3, y: 14 },
        ];

        [
            { yShift: 2, isCollisionExpected: false },
            { yShift: 1, isCollisionExpected: true },
            { yShift: 0, isCollisionExpected: true },
            { yShift: -1, isCollisionExpected: true },
            { yShift: -2, isCollisionExpected: false },
        ].forEach(
            ({ yShift: yShift, isCollisionExpected: isCollisionExpected }) => {
                const testField = new Field(5, 20);
                testField.update(collisionCoordinates);
                const testFieldStateCopy = new Map(testField.state.map);

                const figurePlacementCoordinates = collisionCoordinates.map(
                    (coordinates) => ({
                        x: coordinates.x - 1,
                        y: coordinates.y + yShift,
                    })
                );

                const figure = new Figure(
                    figurePlacementCoordinates,
                    testField
                );

                const expectedUpdatedFigureCoordinates =
                    figurePlacementCoordinates.map((coordinate) => ({
                        x: coordinate.x + 1,
                        y: coordinate.y,
                    }));

                figure.move(EDirection.RIGHT);

                if (isCollisionExpected) {
                    expect(testField.state.map).not.toEqual(testFieldStateCopy); // field WAS changed

                    figurePlacementCoordinates.forEach((coordinate) => {
                        expect(testField.state.get(coordinate)).toEqual(true);
                    });

                    expect(figure.coordinates).toEqual(
                        figurePlacementCoordinates
                    );
                } else {
                    expect(figure.coordinates).toEqual(
                        expectedUpdatedFigureCoordinates
                    );
                    expect(testField.state.map).toEqual(testFieldStateCopy); // field wasn't changed = no collision
                }
            }
        );
    });

    it("should update field or figure if there is collision downwards", () => {
        const collisionCoordinates: Array<ICoordinate> = [
            { x: 2, y: 15 },
            { x: 3, y: 15 },
        ];

        [
            { xShift: -2, isCollisionExpected: false },
            { xShift: -1, isCollisionExpected: true },
            { xShift: 0, isCollisionExpected: true },
            { xShift: 1, isCollisionExpected: true },
            { xShift: 2, isCollisionExpected: false },
        ].forEach(
            ({ xShift: xShift, isCollisionExpected: isCollisionExpected }) => {
                const testField = new Field(5, 20);
                testField.update(collisionCoordinates);
                const testFieldStateCopy = new Map(testField.state.map);

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

                const expectedUpdatedFigureCoordinates =
                    figurePlacementCoordinates.map((coordinate) => ({
                        x: coordinate.x,
                        y: coordinate.y - 1,
                    }));

                figure.move(EDirection.DOWN);

                if (isCollisionExpected) {
                    expect(testField.state.map).not.toEqual(testFieldStateCopy); // field WAS changed

                    figurePlacementCoordinates.forEach((coordinate) => {
                        expect(testField.state.get(coordinate)).toEqual(true);
                    });

                    expect(figure.coordinates).toEqual(
                        figurePlacementCoordinates
                    );
                } else {
                    expect(figure.coordinates).toEqual(
                        expectedUpdatedFigureCoordinates
                    );
                    expect(testField.state.map).toEqual(testFieldStateCopy); // field wasn't changed = no collision
                }
            }
        );
    });

    it("should update field or figure if there is collision leftwards", () => {
        const figureCoordinates: Array<ICoordinate> = [{ x: 5, y: 20 }];
        const testField = new Field(5, 20);

        const figure = new Figure(figureCoordinates, testField);

        figure.move(EDirection.RIGHT);
        expect(figure.coordinates).toEqual(figureCoordinates);
    });

    it("should not allow rightwards movement when the figure is next to a border", () => {});
});

describe("Coordinate interface", () => {
    it("should be an interface", () => {
        const a: ICoordinate = {
            x: 1,
            y: 2,
        };
    });
});
