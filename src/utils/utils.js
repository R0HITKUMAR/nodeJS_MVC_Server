import crypto from 'crypto';
import config from "../config/config.js";
import constants from './constants.js';

const utils = {
    getTimestamp: () => {
        return new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    },
    encryption: (plainText) => {
        const cipher = crypto.createCipheriv(config.ENCRYPTION_METHOD, constants.cryptoKey, constants.cryptoEncryptionIV)
        return Buffer.from(
            cipher.update(plainText, 'utf8', 'hex') + cipher.final('hex')
        ).toString('base64')
    },
    decryption: (cipherText) => {
        const buff = Buffer.from(cipherText, 'base64')
        const decipher = crypto.createDecipheriv(config.ENCRYPTION_METHOD, constants.cryptoKey, constants.cryptoEncryptionIV)
        return (
            decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
            decipher.final('utf8')
        )
    },
    convertToString: (data) => {
        return JSON.stringify(data);
    }
};

export default utils;