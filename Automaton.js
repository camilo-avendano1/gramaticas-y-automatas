class Automaton {
  _initialState;
  _currentState;

  /**
   * @param {State} initialState The initial state of a custom-made automaton
   */
  constructor(initialState) {
    this._initialState = initialState;
  }
  set initialState(initialState) {
    this._initialState = initialState;
  }
  get initialState() {
    return this._initialState;
  }
  set currentState(currentState) {
    this._currentState = currentState;
  }
  get currentState() {
    return this._currentState;
  }
  /**
   * Evaluates if the automaton current state is acceptable.
   * @returns 
   */
  isTriggered() {
    return this.currentState.type === "ACCEPTABLE";
  }
  /**
   * Shows the message when a trigger occurs.
   */
  showTriggerMessage() {
    console.log(
      `An acceptable state has been triggered: ${this.currentState.message}`
    );
  }

  /**
   * 
   * @param {String} str The string to analyze 
   * @param {boolean} showTrace When true, will show every time that the automaton passes through an acceptable state
   */
  run(str, showTrace) {
    this.currentState = this.initialState;
    let global;
    for (let i = 0; i < str.length; i++) {
      global = false;
      this.currentState = this.currentState.func(str[i]);
      if (this.isTriggered()) {
        showTrace && this.showTriggerMessage();
        global = true;
      }
    }
    console.log(
      `The string has ended being ${
        global ? `acceptable: ${this.currentState.message}` : `unacceptable`
      }`
    );
  }
}

module.exports.Automaton = Automaton;
