import EDirection from "../direction";
import ICoordinate from "../coordinate";

class Figure {
    coordinates: Array<ICoordinate>;

    constructor(coordinate: Array<ICoordinate>) {
        this.coordinates = coordinate;
    }

    move(direction: EDirection) {
        switch (direction) {
            case EDirection.DOWN:
                this.coordinates.forEach((coord) => {
                    coord.y = coord.y - 1;
                });
                break;

            case EDirection.LEFT:
                this.coordinates.forEach((coord) => {
                    coord.x = coord.x - 1;
                });
                break;

            case EDirection.RIGHT:
                this.coordinates.forEach((coord) => {
                    coord.x = coord.x + 1;
                });
                break;

            default:
                break;
        }
        return this.coordinates;
    }
}

export default Figure;
