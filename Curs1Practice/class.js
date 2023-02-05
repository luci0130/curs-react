// Creati o clasa numita "Cars", care sa contina atributele "name" si "speed" si metodele
// "accelerate" si "brake". Metoda accelerate mareste valoare lui "speed" cu 10,
// iar metoda "brake" micsoreaza viteza lui "speed" cu 10.
// Instantiati(creati) doua masini cu nume si valori ale vitezei diferite. Pentru
// fiecare masina, apelati cate o metoda, iar apoi afisati la consola valoare rezultata
// a vitezei.s

class Cars {

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 10;
    }
}


const lamborghini = new Cars('Lamborghini', 50);
const dacia = new Cars('Dacia', 80);

lamborghini.accelerate()
lamborghini.accelerate()

dacia.brake();

console.log(lamborghini);
console.log(dacia);