let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
  case "mango":
    console.log("This is a fruit.");
    break;
  default:
    console.log("Unknown item.");
}

let color = "purple";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Slow down!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Invalid color.");
}

function getDayName(day) {
    switch (day) {
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: case 7: return "Weekend";
      default: return "Invalid day";
    }
  }
  
  console.log(getDayName(4)); // "Thursday"
  console.log(getDayName(7)); // "Weekend"
  console.log(getDayName(10)); // "Invalid day"