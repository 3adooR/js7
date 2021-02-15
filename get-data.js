const {protocol, host, dataPort, dataUrl} = require('./config');
const axios = require(`axios`);

/**
 * Getting data from json-file
 * @param dataType
 * @returns {Promise<*>}
 */
module.exports = function (dataType) {
    return axios(`${protocol}://${host}:${dataPort}${dataUrl}/${dataType}`);
}