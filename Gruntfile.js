/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
/* jshint esversion: 6 */
module.exports = (grunt) => {

    require('time-grunt')(grunt);
    require('./smartedit-build')(grunt).load();

    // -------------------------------------------------------------------------------------------------
    // FILE GENERATION
    grunt.registerTask('generate', [
        'generateTsConfig'
    ]);

    // -------------------------------------------------------------------------------------------------
    // Beautify
    // -------------------------------------------------------------------------------------------------
    grunt.registerTask('sanitize', ['jsbeautifier', 'tsformatter']);


    // webpack
    grunt.registerTask('webpackDev', ['webpack:devSmartedit', 'webpack:devSmarteditContainer']);
    grunt.registerTask('webpackProd', ['webpack:prodSmartedit', 'webpack:prodSmarteditContainer']);

    // -------------------------------------------------------------------------------------------------
    // Linting
    // -------------------------------------------------------------------------------------------------
    grunt.registerTask('linting', ['jshint', 'tslint']);

    grunt.registerTask('sanitize', ['jsbeautifier', 'tsformatter']);

    grunt.registerTask('compile_only', ['sanitize', 'linting', 'copy:sources', 'multiNGTemplates', 'checkNoForbiddenNameSpaces', 'checkI18nKeysCompliancy', 'checkNoFocus']);
    grunt.registerTask('compile', ['clean:target', 'compile_only']);

    grunt.registerTask('multiKarma', ['karma:smartedittrail', 'karma:smartedittrailcommons', 'karma:smartedittrailContainer']);

    grunt.registerTask('test_only', ['generate', 'multiKarma']);
    grunt.registerTask('test', ['generate', 'compile', 'instrumentSeInjectable', 'multiKarma']);

    grunt.registerTask('test', 'run unit tests', function() {
        let target = grunt.option('target') ? grunt.option('target').split(',') : [];
        let tasks = [];
        if (target && target.length) {
            target.forEach((t) => {
                if (t === 'inner') {
                    tasks.push('karma:smartedittrail');
                } else if (t === 'outer') {
                    tasks.push('karma:smartedittrailContainer');
                } else if (t === 'commons') {
                    tasks.push('karma:smartedittrailcommons');
                }
            });
        } else {
            tasks = ['multiKarma'];
        }
        if (grunt.option('browser') && !/^(inner|outer|commons)$/.test(grunt.option('target'))) {
            grunt.fail.fatal('Please set --target=outer, --target=inner or --target=commons');
        }
        grunt.task.run(['generate', 'compile', 'instrumentSeInjectable'].concat(tasks));
    });

    grunt.registerTask('coverage', 'run unit tests with coverage report', () => {
        grunt.option('coverage', true);
        grunt.task.run(['generate', 'multiKarma', 'connect:coverage']);
    });

    grunt.registerTask('concatAndPushDev', ['instrumentSeInjectable', 'webpackDev', 'copy:dev']);
    grunt.registerTask('concatAndPushProd', ['instrumentSeInjectable', 'webpackProd', 'copy:dev']);

    grunt.registerTask('dev', ['compile', 'concatAndPushDev']);

    grunt.registerTask('package_only', ['concatAndPushProd', 'ngdocs']);
    grunt.registerTask('package', ['test', 'package_only']);
    grunt.registerTask('packageSkipTests', ['generate', 'compile_only', 'package_only']);

    grunt.registerTask('e2e', ['connect:dummystorefront', 'connect:test', 'multiProtractor']);
    grunt.registerTask('e2e_max', ['connect:dummystorefront', 'connect:test', 'multiProtractorMax']);
    grunt.registerTask('e2e_dev', 'e2e local development mode', () => {
        grunt.option('keepalive_dummystorefront', true);
        grunt.option('open_browser', true);
        grunt.task.run(['connect:test', 'connect:dummystorefront']);
    });
    grunt.registerTask('e2e_debug', 'e2e local debug mode', () => {
        grunt.option('browser_debug', true);
        grunt.task.run('e2e');
    });
    grunt.registerTask('verify_only', ['e2e']);
    grunt.registerTask('verify', ['generate', 'package', 'verify_only']);
    grunt.registerTask('verify_max', ['generate', 'package', 'e2e_max']);

};
