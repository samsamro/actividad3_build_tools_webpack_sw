const path=require('path')

module.exports={
    entry:'./src/index.ts',
    devtool:'inline-source-map',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },

    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use: 'ts-loader',
                exclude:/node-moules/,
            }
        ],
    },
    resolve:{
        extensions:['.tsx','.ts', '.js'],
    },

    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    }
};