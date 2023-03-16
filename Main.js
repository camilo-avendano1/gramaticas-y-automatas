const State = require("./State.js").State;
const Automaton = require("./Automaton.js").Automaton;
const grammar = require("./Grammar");

const customMadeAutomaton = (function () {
  //Definition of states
  const state0 = new State("even Ones", "INITIAL");
  const state1 = new State("odd Ones ", "ACCEPTABLE");
  const state2 = new State("Even Zeros", "ACCEPTABLE");
  const state3 = new State("Odd Zeros", "NORMAL");
  //Definition of relations between states depending on the variable passing through them
  state0.func = (v) => (v === "1" ? state1 : state3);
  state1.func = (v) => (v === "1" ? state0 : state3);
  state2.func = (v) => (v === "1" ? state1 : state3);
  state3.func = (v) => (v === "1" ? state1 : state2);
  //Creation of the generic automaton linking the initial state defined before
  const automaton = new Automaton(state0);
  //Run the automaton
  // automaton.run('111011001', false)

  //Create 10 random different expresions using the grammar
  let expressions = [];
  while (expressions.length < 10) {
    let newWord = grammar();
    if (!expressions.includes(newWord)) {
      expressions.push(newWord);
    }
  }
  //Evaluates the expressions array
  expressions.forEach(expression => {
    console.log("The expresion is", expression);
    automaton.run(expression, false);
  });
})();



