import ICoordinate from "../coordinate";

class Field {
    state: Map<ICoordinate, Boolean>;

    constructor(width: number, height: number) {
        const state = new Map();

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const coordinate: ICoordinate = { x: i, y: j };
                state.set(coordinate, false);
            }
        }

        this.state = state;
    }

    update(figure: Array<ICoordinate>) {
        figure.forEach((key, _) => {
            this.state.set(key, true);
        });
    }
}

export default Field;
