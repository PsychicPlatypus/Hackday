import EDirection from "../direction";
import ICoordinate from "../coordinate";

class Figure {
    coordinate: Array<ICoordinate>;

    constructor(coordinate: Array<ICoordinate>) {
        this.coordinate = coordinate;
    }

    move(direction: EDirection) {
        switch (direction) {
            case EDirection.DOWN:
                this.coordinate.forEach((coord) => {
                    coord.y = coord.y - 1;
                });
                break;

            case EDirection.LEFT:
                this.coordinate.forEach((coord) => {
                    coord.x = coord.x - 1;
                });
                break;

            case EDirection.RIGHT:
                this.coordinate.forEach((coord) => {
                    coord.x = coord.x + 1;
                });
                break;

            default:
                break;
        }
        return this.coordinate;
    }
}

export default Figure;
