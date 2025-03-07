class Square {
    constructor(side) {
        this.side = side;
    }

    perimeter = () => this.side * 4;
    area = () => this.side ** 2;
    diagonal = () => Math.sqrt(2) * this.side;

    describe = () =>
        `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()} and diagonal of ${this.diagonal().toFixed(3)}.`;
}

[new Square(2), new Square(4), new Square(5)].forEach(square => console.log(square.describe()));