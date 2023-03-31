import EDirection from "../direction";
import ICoordinate from "../coordinate";
import Field from "../field";

class Figure {
    coordinates: Array<ICoordinate>;
    field: Field;

    constructor(coordinates: Array<ICoordinate>, field: Field) {
        this.coordinates = coordinates;
        this.field = field;
    }

    move(direction: EDirection) {
        switch (direction) {
            case EDirection.DOWN: {
                if (this.checkCollision(EDirection.DOWN)) {
                    this.field.update(this.coordinates);
                } else {
                    this.coordinates = this.coordinates.map(
                        ({ x: x, y: y }) => ({ x: x, y: y - 1 })
                    );
                }

                return this.coordinates;
            }

            case EDirection.LEFT: {
                if (this.checkCollision(EDirection.LEFT)) {
                    this.field.update(this.coordinates);
                } else {
                    this.coordinates = this.coordinates.map(
                        ({ x: x, y: y }) => ({ x: x - 1, y: y })
                    );
                }

                return this.coordinates;
            }

            case EDirection.RIGHT: {
                if (this.checkCollision(EDirection.RIGHT)) {
                    this.field.update(this.coordinates);
                } else {
                    this.coordinates = this.coordinates.map(
                        ({ x: x, y: y }) => ({ x: x + 1, y: y })
                    );
                }

                return this.coordinates;
            }
        }
    }

    checkCollision(direction: EDirection) {
        let targetPosition: Array<ICoordinate> = this.coordinates;

        switch (direction) {
            case EDirection.DOWN: {
                targetPosition = this.coordinates.map((coord) => ({
                    x: coord.x,
                    y: coord.y - 1,
                }));

                break;
            }

            case EDirection.LEFT: {
                targetPosition = this.coordinates.map((coord) => ({
                    x: coord.x - 1,
                    y: coord.y,
                }));

                break;
            }

            case EDirection.RIGHT: {
                targetPosition = this.coordinates.map((coord) => ({
                    x: coord.x + 1,
                    y: coord.y,
                }));

                break;
            }
        }

        return targetPosition.some((coord) => this.field.state.get(coord));
    }
}

export default Figure;
