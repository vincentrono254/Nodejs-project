const crypto = require("crypto");

const key1 = crypto.randomBytes(32).toString("hox");
const key2 = crypto.randomBytes(32).toString("hox");
console.log(key1, key2);
