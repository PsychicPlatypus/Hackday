import ICoordinate from "../../coordinate";

class FieldMap {
    map: Map<String, boolean>;

    constructor() {
        this.map = new Map();
    }

    get(coordinate: ICoordinate): boolean | undefined {
        const { x: x, y: y } = coordinate;
        const stringKey = `${x}_${y}`;

        return this.map.get(stringKey);
    }

    set(
        coordinate: ICoordinate,
        coordinateState: boolean
    ): Map<String, boolean> {
        const { x: x, y: y } = coordinate;
        const stringKey = `${x}_${y}`;

        return this.map.set(stringKey, coordinateState);
    }
}

export default FieldMap;
