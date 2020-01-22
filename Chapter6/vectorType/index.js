class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus({ x, y }) {
    return new Vec((this.x + x), (this.y + y))
    }

    minus({ x, y }) {
        return new Vec((this.x - x), (this.y - y));
    }

    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y)); 
    }
}

module.exports = Vec;