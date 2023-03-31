import Figure from "../figure";
import Field from "../field";
import { createSquare } from "../figureFactory";
import EDirection from "../direction";

class GameLoop {
    figure: Figure | null;
    field: Field;

    constructor(field: Field) {
        this.field = field;
        this.figure = createSquare(field);
    }

    step() {
        if (!this.figure) {
            this.figure = createSquare(this.field);
            return;
        }

        const moveResult = this.figure.move(EDirection.DOWN);

        if (!moveResult) {
            this.figure = null;
        }
    }
}

export default GameLoop;
