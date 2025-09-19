import Animals from "./Animal";

export default class Dog extends Animals {
    constructor(name: string, maxSpeed: number) {
        super(name, maxSpeed)
    }
}