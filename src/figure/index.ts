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
                const updatedCoordinates = this.coordinates.map(
                    ({ x: x, y: y }) => ({
                        x: x,
                        y: y - 1,
                    })
                );
                if (
                    this.checkFieldBorderCollision(
                        EDirection.DOWN,
                        updatedCoordinates
                    ) ||
                    this.checkCollision(EDirection.DOWN)
                ) {
                    this.field.update(this.coordinates);
                    return false;
                } else {
                    this.coordinates = updatedCoordinates;
                }

                return this.coordinates;
            }

            case EDirection.LEFT: {
                const updatedCoordinates = this.coordinates.map(
                    ({ x: x, y: y }) => ({
                        x: x - 1,
                        y: y,
                    })
                );

                if (
                    this.checkFieldBorderCollision(
                        EDirection.LEFT,
                        updatedCoordinates
                    )
                ) {
                    return this.coordinates;
                } else if (this.checkCollision(EDirection.LEFT)) {
                    this.field.update(this.coordinates);
                } else {
                    this.coordinates = updatedCoordinates;
                }

                return this.coordinates;
            }

            case EDirection.RIGHT: {
                const updatedCoordinates = this.coordinates.map(
                    ({ x: x, y: y }) => ({
                        x: x + 1,
                        y: y,
                    })
                );

                if (
                    this.checkFieldBorderCollision(
                        EDirection.RIGHT,
                        updatedCoordinates
                    )
                ) {
                    return this.coordinates;
                } else if (this.checkCollision(EDirection.RIGHT)) {
                    this.field.update(this.coordinates);
                } else {
                    this.coordinates = updatedCoordinates;
                }

                return this.coordinates;
            }
        }
    }

    checkCollision(direction: EDirection) {
        let targetPosition: Array<ICoordinate> = this.coordinates;
        let fieldBorderCollisionFound = false;

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

        const figureCollisionFound = targetPosition.some((coord) =>
            this.field.state.get(coord)
        );

        return figureCollisionFound || fieldBorderCollisionFound;
    }

    private checkFieldBorderCollision(
        direction: EDirection,
        updatedCoordinates: Array<ICoordinate>
    ) {
        switch (direction) {
            case EDirection.DOWN: {
                return updatedCoordinates.some(({ y: y }) => y === -1);
            }
            case EDirection.LEFT: {
                return updatedCoordinates.some(({ x: x }) => x === -1);
            }
            case EDirection.RIGHT: {
                const largestXCoordinate = Math.max(
                    ...Array.from(this.field.state.map.keys()).map(
                        (coord_str) => {
                            const [x, _y] = coord_str.split("_");
                            return parseInt(x);
                        }
                    )
                );

                return updatedCoordinates.some(
                    ({ x: x }) => x === largestXCoordinate + 1
                );
            }
        }
    }
}

export default Figure;
