class Pet {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

function main() {
    const myPet = new Pet('Gunner', 'mutt');
    
    console.log(myPet);
}

main();
