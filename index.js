class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
    
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} is older than ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} is younger than ${otherUser.firstName}`;
      } else {
        return `${this.firstName} and ${otherUser.firstName} are the same age`;
      }
    }
  }
  
  // Creating objects from the User class
  const user1 = new User("Victor", "Osimhen", 30, "New York");
  const user2 = new User("Kvicha", "Kvaraschtelia", 25, "Georgia");
  
  // Testing the compareAge method
  console.log(user1.compareAge(user2)); // Output: "1 is older than 2"

  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  const pets = [];
  
  function addPet() {
    const petName = document.getElementById("pet-name").value;
    const ownerName = document.getElementById("owner-name").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);
  
    displayPets();
  }
  
  function displayPets() {
    const petList = document.getElementById("pet-list");
    petList.innerHTML = "";
  
    pets.forEach(pet => {
      const li = document.createElement("li");
      li.textContent = `${pet.petName} - ${pet.ownerName} - ${pet.species} - ${pet.breed}`;
      petList.appendChild(li);
    });
  }
  