import Figure from "../figure";
import Field from "../field";
import ICoordinate from "../coordinate";

export function createSquare(field: Field) {
    const startingXCoordinate = Math.floor(field.state.map.size / 2);
    const largestYCoordinate = Math.max(
        ...Array.from(field.state.map.keys()).map((coord_str) => {
            const [_x, y] = coord_str.split("_");
            return parseInt(y);
        })
    );
    const coordinates: Array<ICoordinate> = [
        { x: startingXCoordinate, y: largestYCoordinate },
        { x: startingXCoordinate + 1, y: largestYCoordinate },
        { x: startingXCoordinate, y: largestYCoordinate - 1 },
        { x: startingXCoordinate + 1, y: largestYCoordinate - 1 },
    ];
    return new Figure(coordinates, field);
}
