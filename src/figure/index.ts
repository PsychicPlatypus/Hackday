import EDirection from "../direction";
import ICoordinate from "../coordinate";
import Field from "../field";

class Figure {
    coordinates: Array<ICoordinate>;
    field: Field;

    constructor(coordinate: Array<ICoordinate>, field: Field) {
        this.coordinates = coordinate;
        this.field = field;
    }

    move(direction: EDirection) {
        switch (direction) {
            case EDirection.DOWN:
                if (this.checkCollision()) {
                    this.field.update(this.coordinates);
                    return;
                }
                this.coordinates.forEach((coord) => {
                    coord.y = coord.y - 1;
                });
                break;

            case EDirection.LEFT:
                if (this.checkCollision()) {
                    this.field.update(this.coordinates);
                    return;
                }
                this.coordinates.forEach((coord) => {
                    coord.x = coord.x - 1;
                });
                break;

            case EDirection.RIGHT:
                if (this.checkCollision()) {
                    this.field.update(this.coordinates);
                    return;
                }
                this.coordinates.forEach((coord) => {
                    coord.x = coord.x + 1;
                });
                break;

            default:
                break;
        }
        return this.coordinates;
    }

    // checkCollision(field: Field) {
    //     return this.coordinates.some((coord) => {
    //         return field.state.some((fieldCoord) => {
    //             return fieldCoord.x === coord.x && fieldCoord.y === coord.y;
    //         });
    //     });
    // }

    checkCollision() {
        const underPosition: Array<ICoordinate> = this.coordinates.map(
            (coord) => {
                return { x: coord.x, y: coord.y - 1 };
            }
        );

        const res = underPosition.some((coord) => {
            return this.field.state.get(coord);
        });

        return res;
    }
}

export default Figure;
