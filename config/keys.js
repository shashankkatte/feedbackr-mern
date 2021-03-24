//  Prod- keys.js
if(process.env.NODE_ENV=== 'production'){
    //  we are in prod env
    module.exports = require('./prod');
}else {
    // we are in dev env
    module.exports = require('./dev');
}

