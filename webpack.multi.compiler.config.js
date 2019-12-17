const path = require('path');
const IP = require('ip').address()
module.exports = [
    {
        name: 'hello',
        devServer:{
            hotOnly: true,
            host: '0.0.0.0',
            sockPath: '/custom-sockjs-node',
            
            sockHost: `${IP}`, 
            sockPort: '8080', 
            headers: {
                'Access-Control-Allow-Origin': '*', 
            
            
            },
        },
        mode: 'development',
        
        
        context: path.resolve(__dirname, 'app'), 
        
        optimization: {
            minimize: false 
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js',
            publicPath: `http://${IP}:8080/`
        },
        plugins: [
            
            
            
        ],
        entry: './src/index.js',
    },
    {
        name: 'world',
        mode: 'development',
        context: path.resolve(__dirname, 'app'), 
        
        optimization: {
            minimize: false 
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index2.js',
            publicPath: `http://${IP}:8080/`
        },
        plugins: [
        ],
        entry: './src/index2.js',
    }
];