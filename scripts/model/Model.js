/**
 * Created by creativecode on 05.03.16.
 */
let singleton = Symbol();
let singletonEnforcer = Symbol();

class Model {

    loggedIn = false;
    smsCode = 0;

    /**
     * @param enforcer
     */
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }
    }

    /**
     * @returns Singleton
     */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Model(singletonEnforcer);
        }
        return this[singleton];
    }

}

export default Model;