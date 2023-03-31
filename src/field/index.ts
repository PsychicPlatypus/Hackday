import ICoordinate from "../coordinate";
import FieldMap from "./FieldMap";

class Field {
    state: FieldMap;

    constructor(width: number, height: number) {
        const state = new FieldMap();

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const coordinate: ICoordinate = { x: i, y: j };
                state.set(coordinate, false);
            }
        }

        this.state = state;
    }

    update(figure: Array<ICoordinate>) {
        figure.forEach((coord) => {
            this.state.set(coord, true);
        });
    }
}

export default Field;
