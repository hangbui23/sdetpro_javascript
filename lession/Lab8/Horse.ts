import Animals from "./Animal";

export default class Horse extends Animals {
    constructor(name: string, maxSpeed: number) {
        super(name, maxSpeed)
    }
}