module.exports = (config)=>{
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: ['**/*.spec.ts'],
        browsers: ['Chrome']
    });

}