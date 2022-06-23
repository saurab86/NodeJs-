
require('./7_mind_grenade')
// This module is from module7
// and if we have function inside the module that we invoke, we need not used to assign to a variable.

const sayHi = (name)=>{
        console.log(`Hello there ${name}`);
    }

    // export default
    module.exports = sayHi

require('./7_mind_grenade')
