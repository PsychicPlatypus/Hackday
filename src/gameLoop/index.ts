import Figure from "../figure";
import Field from "../field";
import { createSquare } from "../figureFactory";

class GameLoop {
    figure: Figure;
    field: Field;

    constructor(field: Field) {
        this.field = field;
        this.figure = createSquare(field);
    }

    step() {
        if (!this.figure) {
            this.figure = createSquare(this.field);
        }
    }
}

export default GameLoop;
