import Animals from "./Animal";

export default class AnimalControler{
    public run(animal:Animals[]):Animals{
        let winner = animal[0];
        for(let i=0;i<animal.length;i++){
            if(winner.getSpeed()<animal[i].getSpeed()){
                winner = animal[i];
            }
        }
        return winner;
    }

    public printWinner(winner: Animals): void {
        console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()} km/h`);
    }
}