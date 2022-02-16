class Pet {
    constructor(name) {
        this.name = name;
        this.species = [];
        this.age = [];
        this.breed = [];
        this.gender = [];
    }
    addSpecies(newSpecies) {
        this.species.push(newSpecies);
        return this;
    } 
    addAge(newAge) {
        this.age.push(newAge);
        return this;
    } 
    addBreed(newBreed) {
        this.breed.push(newBreed);
        return this;
    }
    addGender(newGender){
        this.gender.push(newGender);
        return this;
    } 
    setName(newName) {
        this.name = newName;
        return this;
    }
    describe() {
        if (this.gender == 'male') {
            console.log(
                `My ${this.species}, ${this.name},`
                + `is ${this.age}years old, and he is a ${this.gender} ${this.breed}.`
            );
        } else {
            console.log(
                `My ${this.species}, ${this.name},`
                + `is ${this.age}years old, and she is a ${this.gender} ${this.breed}.`
            )
        }
    }
}
function main() {
    const myPet = new Pet('Gunner');
        myPet.addSpecies('dog')
             .addAge('4')
             .addBreed('mutt')
             .addGender('male');

    myPet.describe();
}

main();
