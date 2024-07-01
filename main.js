const input = require('sync-input');
let tickets = 0;
console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");


const gifts = [{name:"Teddy Bear", id: 1, cost: 10},{name:"Big Red Ball", id: 2, cost: 5},
              {name:"Huge Bear", id: 3, cost: 50},{name:"Candy", id: 4, cost: 8},
               {name:"Stuffed Tiger", id: 5, cost: 15},{name:"Stuffed Dragon", id: 6, cost: 30},
               {name:"Skateboard", id: 7, cost: 100},{name:"Toy Car", id: 8, cost: 25},
               {name:"Basketball", id: 9, cost: 20},{name:"Scary Mask", id: 10, cost: 75}];

function showGifts() {
  
    console.log("Here's the list of gifts:\n");
  if(gifts.length > 0){
  for (let i = 0; i < gifts.length; i++) {
      console.log(`${gifts[i].id}- ${gifts[i].name}, Cost: ${gifts[i].cost} tickets`);
  }
  } else {
    console.log("Wow! There are no gifts to buy.");
  }
}

showGifts();
function buyGift() {

  let inputAction = input("Enter the number of the gift you want to get:");
  if (gifts.length) {
    if (!isNaN(inputAction)) {
      for (let i = 0; i < gifts.length; i++) {
        if (parseInt(inputAction) > gifts[gifts.length-1].id) {
          console.log("There is no gift with that number!");
        } else {
          if (parseInt(inputAction) == gifts[i].id) {
            if (tickets >= gifts[i].cost) {
              console.log(`Here you go, one ${gifts[i].name}!`);
              tickets -= gifts[i].cost;
              gifts.splice(i, 1);
              console.log(`Total tickets: ${tickets}`);
            } else {
              console.log("You don't have enough tickets to buy this gift.");
            }
          }
        }
      }
    } else {
      console.log("Please enter a valid number!");
    }
  } else {
    console.log("Wow! There are no gifts to buy.");
  }

}

function addTickets() {
  
  let inputNum = input("Enter the ticket amount:");
  let intInput = parseInt(inputNum);
  if (!isNaN(inputNum) && intInput <= 1000) {
    tickets += intInput;
    console.log(`Total tickets: ${tickets}`);
  } else {
    console.log("Please enter a valid number between 0 and 1000.")
  }
  
   
}

function showTickets() {
  console.log(`Total tickets: ${tickets}`);
}
   
while (true) {
    console.log("What do you want to do?");
    let inputMenu = input("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop \n");
   if (!isNaN(inputMenu)) {
    switch (parseInt(inputMenu)) {
        case 1:
          if (gifts.length) {
            buyGift();
            showGifts();
            break;
          } else {
            console.log("Wow! There are no gifts to buy.");
            break;
          }
        case 2:
            addTickets();
            break;
        case 3:
            showTickets();
            break;
        case 4:
            showGifts();
            break;
        case 5:
            console.log("Have a nice day!");
            return;
        default:
              console.log("Please enter a valid number!");
    }
   } else {
     console.log("Please enter a valid number!")
   }
}
