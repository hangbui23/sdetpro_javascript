export default class Animals {
    protected name: string;
    protected speed: number;
    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    public getName():string{
        return this.name;   
    }

    public getSpeed():number {
        return this.speed;
    }
}