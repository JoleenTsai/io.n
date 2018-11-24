const moment = require('moment')


module.exports = (period, custom1, custom2) => {

    switch (period) {
        case 'custom':
            return {
                start: moment(custom1).format('YYYY-MM-DD'),
                end: moment(custom2).format('YYYY-MM-DD')
            }
        break
        case 'lastMonth':
            return {
                start: moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
                end: moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
            }
            break
        case 'lastWeek':
            return {
                start: moment().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
                end: moment().subtract(1, 'week').endOf('week').format('YYYY-MM-DD')
            }
            break
        case 'yesterday':
            return {
                start: moment().subtract(1, 'day').format('YYYY-MM-DD'),
                end: moment().subtract(1, 'day').format('YYYY-MM-DD')
            }
            break
        case 'today':
            return {
                start: moment().format('YYYY-MM-DD'),
                end: moment().format('YYYY-MM-DD')
            }
            break
    }


    // start(period) {
    //     getNow(period)
    //     return 
    // },
    // end(period){
    //     getNow(period)

    //     return endDate

}