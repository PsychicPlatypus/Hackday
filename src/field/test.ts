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
                expectedState.set(`${xInd}_${yInd}`, false);
            }
        }

        expect(initializedField.state.map).toEqual(expectedState);
    });

    it("should initialize with coordinates states to be false", () => {
        const initializedField = new Field(3, 3);

        for (let [_, value] of initializedField.state.map) {
            expect(value).toEqual(false);
        }
    });

    // TOTALY BROKEN
    // TODO: fix it
    // it("should turn true given list of coordinates states on calling update", () => {
    //     const initializedField = new Field(3, 3);
    //     const expectedState = new Map();
    //     const coordinatesToEnable = [
    //         { x: 1, y: 1 } as ICoordinate,
    //         { x: 2, y: 0 } as ICoordinate,
    //     ];
    //     coordinatesToEnable.forEach((coordinate) => {
    //         expectedState.set(coordinate, true);
    //     });

    //     console.log(expectedState, expectedState.get({ x: 2, y: 0 }));

    //     initializedField.update(coordinatesToEnable);

    //     for (let [keyCoordinates, value] of initializedField.state) {
    //         const shouldBeEnabled = !!expectedState.get(keyCoordinates);
    //         console.log(
    //             keyCoordinates,
    //             shouldBeEnabled,
    //             value,
    //             expectedState.get(keyCoordinates)
    //         );
    //         expect(value).toEqual(shouldBeEnabled);
    //     }
    // });
});
