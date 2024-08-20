import utils from "./utils.js"

const common = {
    encryptData: async (plainText) => {
        try {
            if (typeof (plainText) !== 'string') {
                plainText = utils.convertToString(plainText);
            }
            return await utils.encryption(plainText);
        }
        catch (error) {
            console.log("Error:", error);
        }
    },
    decryptData: async (cipherText) => {
        try {
            let data = await utils.decryption(cipherText);
            if (typeof (data) === 'string') data = JSON.parse(data);
            return data;
        }
        catch (error) {
            console.log("Error:", error);
        }
    }
};

export default common;