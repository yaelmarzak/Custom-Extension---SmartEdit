/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
module.exports = function() {
    return {
        targets: [
            'sources',
            'dev'
        ],
        config: function(data, conf) {
            return {
                sources: {
                    files: [{
                        expand: true,
                        flatten: false,
                        src: [
                            'web/features/**/*.+(js|ts)'
                        ],
                        dest: 'jsTarget/'
                    }]
                },
                dev: {
                    expand: true,
                    flatten: true,
                    src: ['jsTarget/*.js'],
                    dest: 'web/webroot/smartedittrail/js'
                }
            };
        }
    };
};
