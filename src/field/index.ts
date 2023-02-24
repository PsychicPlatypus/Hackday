import ICoordinate from "../coordinate";

const originalGet = Map.prototype.get;
const originalSet = Map.prototype.set;

Map.prototype.get = function (obj) {
    const serialized = JSON.stringify(obj);
    return originalGet.call(this, serialized);
};

Map.prototype.set = function (obj, val) {
    const serialized = JSON.stringify(obj);
    return originalSet.call(this, serialized, val);
};

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
        figure.forEach((coord) => {
            this.state.set(coord, true);
        });
    }
}

export default Field;
