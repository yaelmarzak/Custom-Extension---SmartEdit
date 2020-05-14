/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
module.exports = function() {
    return {
        config: function(data, conf) {
            conf.files = [
                'web/features/**/*.ts',
                'jsTests/**/*.ts'
            ];
            return conf;
        }
    };
};
