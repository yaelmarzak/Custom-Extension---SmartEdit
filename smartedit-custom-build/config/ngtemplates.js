/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
module.exports = function() {

    return {
        targets: [
            'smartedittrail',
            'smartedittrailcommons',
            'smartedittrailContainer'
        ],
        config: function(data, conf) {
            const sourcesRoot = 'web/features/';

            function generateConfigForFolder(folderName) {
                return {
                    src: [sourcesRoot + folderName + '/**/*Template.html'],
                    dest: 'jsTarget/' + sourcesRoot + folderName + '/templates.js',
                    options: {
                        standalone: true, //to declare a module as opposed to binding to an existing one
                        module: folderName + 'Templates'
                    }
                };
            }

            conf.smartedittrail = generateConfigForFolder('smartedittrail');
            conf.smartedittrailcommons = generateConfigForFolder('smartedittrailcommons');
            conf.smartedittrailContainer = generateConfigForFolder('smartedittrailContainer');

            return conf;
        }
    };

};
