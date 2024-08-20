import dbModels from "../../database/db.models.js";

const appConfigService = {
    getConfig: async () => {
        var config = {};
        const result = await dbModels.appConfig.find();
        if (result != null && result.length > 0) {
            result.forEach(item => {
                config[item.key] = item.value;
            });
        }
        return config;
    }
};


export default appConfigService;