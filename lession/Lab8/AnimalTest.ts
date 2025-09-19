import Horse from './Horse';
import Dog from './Dog';
import Tiger from './Tiger';
import AnimalControler from './AnimalControler';

const horse = new Horse("Horse",75);
const dog = new Dog("Dog", 60);
const tiger = new Tiger("Tiger", 100);

const animalControler = new AnimalControler();
console.log("Animal Racing Game");
console.log("Horse speed: " + horse.getSpeed() + " km/h");
console.log("Dog speed: " + dog.getSpeed() + " km/h");
console.log("Tiger speed: " + tiger.getSpeed() + " km/h");

var winner = animalControler.run([horse,dog,tiger]);
animalControler.printWinner(winner);

