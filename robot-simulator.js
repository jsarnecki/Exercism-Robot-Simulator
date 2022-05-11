
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {

  constructor(face) {
    this.face = face;
  }

  get bearing() {
    if (this.face) {
      return this.face;
    }
    return 'north';
  }

  get coordinates() {
   // Get from place - return as [x, y]
  }

  place({ x, y, direction }) {
    // If direction isn't north south east west, return InvalidInputError class
    this.face = direction;

  }

  evaluate(instructions) {
    // Finds L R A
  }
}
