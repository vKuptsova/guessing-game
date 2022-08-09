class GuessingGame {
    constructor() {}

    setRange(min, max) { 
    this.min = min;
    this.max = max;
    }

    guess() { 
      this.num = Math.ceil((this.max + this.min) / 2);
      return this.num;
    }

    lower() { 
      this.max = this.num;
      this.num = Math.ceil((this.max + this.min) / 2);
      return (this.num+" max "+this.max+" min " +this.min);
    }

    greater() { 
      this.min = this.num;
      this.num = Math.ceil((this.max + this.min) / 2);
      return (this.num+" max "+this.max+" min " +this.min);
    }
}

module.exports = GuessingGame;
