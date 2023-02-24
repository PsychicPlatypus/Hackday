import Field from "./index";
import ICoordinate from "../coordinate";

describe("Field", () => {
    it("should be able to call constructor", () => {
        const width = 5;
        const height = 20;

        const initializedField = new Field(width, height);

        const expectedState = new Map();

        for (let xInd = 0; xInd < width; xInd++) {
            for (let yInd = 0; yInd < height; yInd++) {
                const coordinate: ICoordinate = { x: xInd, y: yInd };
                expectedState.set(coordinate, false);
            }
        }

        expect(initializedField.state).toEqual(expectedState);
    });

    it("should initialize with coordinates states to be false", () => {
        const initializedField = new Field(3, 3);

        for (let [_, value] of initializedField.state) {
            expect(value).toEqual(false);
        }
    });

    it("should turn true given list of coordinates states on calling update", () => {
        const expectedState = new Map<ICoordinate, boolean>();
        const coordinatesToEnable = [
            { x: 1, y: 1 } as ICoordinate,
            { x: 2, y: 0 } as ICoordinate,
        ];
        coordinatesToEnable.forEach((coordinate) => {
            expectedState.set(coordinate, true);
        });

        const initializedField = new Field(3, 3);
        initializedField.update(coordinatesToEnable);

        for (let [keyCoordinates, value] of initializedField.state) {
            const shouldBeEnabled = !!expectedState.get(keyCoordinates);
            expect(value).toEqual(shouldBeEnabled);
        }
    });
});
