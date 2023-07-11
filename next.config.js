const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: 'slavendownload',
                mongodb_password: 'hc3nCEwUiGiMHLL6',
                mongodb_clustername: 'cluster0',
                mongodb_databasekey: 'my-site-dev'
            }
        }
    }


    return {
    env: {
        mongodb_username: 'slavendownload',
        mongodb_password: 'hc3nCEwUiGiMHLL6',
        mongodb_clustername: 'cluster0',
        mongodb_databasekey: 'my-site'
    }
}}