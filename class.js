// the constructor function is called with the new keyword
// the constructor function, by convention, starts with a capital letter
// the constructor function controls the setting of data on the objects that will be created
// "inherited" methods are placed on the constructor function's prototype object
// Keep these in mind as we look at how ES6 classes work because, remember, ES6 classes set up all of this for you under the hood.

// ES6 Classes






class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}