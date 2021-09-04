const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://upload.gyazo.com/api/upload',
        secure: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];
module.exports = PROXY_CONFIG;