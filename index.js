// const schedule = require('node-schedule')
const api = require('./api')

api.init()

// Run once every 20 mins
// schedule.scheduleJob('00 */20 9-20 * * *', api.init)