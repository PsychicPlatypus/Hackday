import { createSquare } from "./index";
import Field from "../field";
import Figure from "../figure";

// import ICoordinate from "../coordinate";

describe("createSquare", () => {
    it("should be able to create square figure", () => {
        const testField = new Field(5, 20);
        const resultFigure: Figure = createSquare(testField);

        expect(resultFigure.coordinates.length).toEqual(4);
    });
});

it("should create square figure", () => {
    [
        [5, 20, 2, 3],
        [12, 31, 5, 6],
    ].forEach(([width, height, expectedFirstX, expectedSecondX]) => {
        const expectedXCoordinates = [expectedFirstX, expectedSecondX];

        const testField = new Field(width, height);
        const resultFigure: Figure = createSquare(testField);

        resultFigure.coordinates.forEach(({ x: x, y: y }) => {
            const coordinateShouldBeInsideField =
                x in expectedXCoordinates && y === height;
            expect(!!testField.state.get({ x: x, y: y })).toEqual(
                coordinateShouldBeInsideField
            );
        });
    });
});
