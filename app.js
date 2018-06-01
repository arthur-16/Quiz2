let card = document.getElementsByClassName("card");
let cardTitle = document.getElementsByClassName("card-title");
let cardText = document.getElementsByClassName("card-text");
let cardText2 = document.getElementsByClassName("card-text2");
let cardImage = document.getElementsByClassName("card-img-top");
let i;
class Character {
  constructor(name, age, actor, image) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.image = image;
    this.cardInfo();
    this.addCard()
  }
  cardInfo() {
    cardTitle.innerText = this.name;
    cardText.innerText = this.age;
    cardText2.innerText = `Actor ${this.actor} plays ${this.name}.`;
  }
  randomCard() {
    let random = [Math.floor(Math.random * characters.length)];

  }

  addCard() {
    $("#create").click(function() {
        for (i=0; $(".card").length < 8; i++) {
            $(".card").clone().appendTo($("#container"))
        }
        
    });
  }
}
characters = [
  (c1 = new Character("Jimmy Conway", 47, "Robert De Niro")),
  (c2 = new Character("Henry Hill", 36, "Ray Liotta")),
  (c3 = new Character("Tommy DeVito", 47, "Joe Pesci")),
  (c4 = new Character("Stacks Edwards", 36, "Samuel L. Jackson")),
  (c5 = new Character("Paul Cicero", 51, "Paul Sorvino")),
  (c6 = new Character("Billy Batts", 53, "Frank Vincent")),
  (c7 = new Character("Frankie Carbone", 38, "Frank Sivero")),
  (c8 = new Character("Mooris Kessler", 62, "Chuck Low"))
];












// class JimmyConway extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class HenryHill extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class TommyDevito extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class KarenHill extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class PaulCicero extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class BillyBatts extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class Spider extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
// class StacksEdwards extends Character {
//   constructor(name, age, hometown) {
//     super(name, age, hometown);
//   }
// }
