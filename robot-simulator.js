
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {

  constructor(face, coords) {
    this.face = face;
    this.coords = coords;
  }

  get bearing() {
    if (this.face) {
      return this.face;
    }
    return 'north';
  }

  get coordinates() {
   // Get from place - return as [x, y]
   return this.coords;
  }

  place({ x, y, direction }) {
    // If direction isn't north south east west, return InvalidInputError class
    const newError = new InvalidInputError("invalid robot bearing");
    const compass = ["north", "east", "south", "west"];
    if (!compass.includes(direction)) {
      throw newError;
    }
    this.face = direction;
    this.coords = [x, y];

  }

  evaluate(instructions) {
    // Finds L R A
    // Instructions come in as a string, split
    // Go thru array of instructions
    // Each direction must follow based on the previous
    let currentDir = this.bearing;
    let currentCoord = this.coordinates;
    let directions = instructions.split("");

    for (let x of directions) {
      if (x !== "A") {
        this.changeFace(currentDir, x);
      }
    }

    // if it's A -> function that takes currentDir + the currentCoords to manipulate, return not needed, as it coords/face
    // if L/R -> function takes in currentDir + direction and manipulates this.face, no return needed

    
    // Coordnates only change from "A"
    // Face only changes from "L" and "R"
  }
  
  changeFace(currentDirection, newDirection) {
    // takes currentDir + direction
    if (newDirection === "L") {
      // confirm currentDir, and turn according to direction
      switch (currentDirection) {
        case "north":
          this.face = "west";
          break;
        case "east":
          this.face = "north";
          break;
        case "south":
          this.face = "east";
          break;
        case "west":
          this.face = "south";
          break;
        }
        // change this.face
    } else if (newDirection === "R") {
      switch (currentDirection) {
        case "north":
          this.face = "east";
          break;
        case "east":
          this.face = "south";
          break;
        case "south":
          this.face = "west";
          break;
        case "west":
          this.face = "north";
          break;
      }
    }
  }

}
