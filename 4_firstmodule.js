const secret = 'SUPER SECRET'
// Here const secret is not exported so it is local variable for this module

const susan = "Susan"
const peter = "Peter"
// Where as const susan and peter are exported so it is global variable for other module.

module.exports = {susan,peter};

// Here in this module 4_firstmodule.js variables such as secret, susan and peter are defined and initialized.
// The root module name is 3_firstmodule.js.
// So module.exports is used to share the variables susan and peter in root moudule 3_module.js.
// 