var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_package: {
        default: {
            include_time: false
        }
    }
});