class Pet {
    constructor(name) {
        this.name = name;
        this.species = [];
        this.age = [];
        this.breed = [];
    }
        addSpecies(newSpecies) {
            this.species.push(newSpecies);
            return this;
        } addAge(newAge) {
            this.age.push(newAge);
            return this;
        } addBreed(newBreed) {
            this.breed.push(newBreed);
            return this;
        } setName(newName) {
            this.name = newName;
            return this;
        }
    describe() {
        console.log(`My ${this.species}, ${this.name}, is a ${this.age} year old ${this.breed}.`)
    }
}
function main() {
    const myPet = new Pet('Gunner');
        myPet.addSpecies('dog')
             .addAge('4')
             .addBreed('mutt');

    myPet.describe();
}

main();
