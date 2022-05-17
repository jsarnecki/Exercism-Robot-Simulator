
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || "Invalid input";
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
    // Default "north" if no face assigned
    return "north";
  }

  get coordinates() {
   // Get from place - return as [x, y]
   return this.coords;
  }

  place({ x, y, direction }) {
    const newError = new InvalidInputError("invalid robot bearing");
    const compass = ["north", "east", "south", "west"];
    if (!compass.includes(direction)) {
      // If direction isn't valid, return InvalidInputError instance
      throw newError;
    }
    this.face = direction;
    this.coords = [x, y];
  }

  evaluate(instructions) {
    for (let x of instructions) {
      // Loop thru each instruction
      if (x !== "A") {
        this.changeFace(this.bearing, x);
      } else {
        this.updateCoords(this.bearing);
      }
    }
  }

  updateCoords(currentDirection) {
    // Updates the coordinates by 1 depending on current facing direction
    switch(currentDirection) {
      case "north":
        this.coords[1]++;
        break;
      case "east":
        this.coords[0]++;
        break;
      case "south":
        this.coords[1]--;
        break;
      case "west":
        this.coords[0]--;
        break;
    }
  }

  changeFace(currentDirection, newDirection) {
    if (newDirection === "L") {
      // Change direction from turning left
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
    } else if (newDirection === "R") {
      // Change direction from turning right
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
