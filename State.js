class State {
    _message;
    _func;
    _type;

    /**
     * 
     * @param {String} message The legend of the state 
     * @param {String} type Use INITIAL for the inital state, ACCEPTABLE for any acceptable state and NORMAL for any other  
     */
    constructor(message = '', type = false) {
        this._type = type
        this._message = message
    }
    /**
     * @param {Function} func function of the state. Need to return the next state depending of the variable passing through it
     */
    set func(func) {
        this._func = func
    }
    get func() {
        return this._func
    }
    get message() {
        return this._message
    }
    get type() {
        return this._type
    }
}

module.exports.State = State