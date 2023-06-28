
const moment = require('moment')

function formatDate(date){
    const startDate = new Date(date).setHours(0,0,0,0)
    const endDate = new Date(date).setHours(23,59,59,59)
    return {dateStart:moment(startDate).format(),
        dateEnd:moment(endDate).format()}
}

/*let dateStart = 
  let dateEnd = 
  dateStart = moment(dateStart).format();
  dateEnd = moment(dateEnd).format()*/

  module.exports = {formatDate}