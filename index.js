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
  const user1 = new User("John", "Doe", 30, "New York");
  const user2 = new User("Jane", "Smith", 25, "Los Angeles");
  
  // Testing the compareAge method
  console.log(user1.compareAge(user2)); // Output: "John is older than Jane"
  

  crea un form per la creazione di oggetti "Pet". 
  la classe Pet dovrà essere dotata delle seguenti proprietà:
  -petName
  -ownerName
  -species 
  -breed 
  Nella classe che utilizzerai per creare questi oggetti aggiungi anche un 