
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
      if (x === 'R' && currentDir === 'north') {
        this.face = 'east';
      }
    }
  }
}
