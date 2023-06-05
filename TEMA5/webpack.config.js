const path=require('path')
const yaml =require('yamljs');
const json5 =require('json5');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'./bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
            rules:[
                {
                    test:/\.s[ac]ss$/i,
                    use:['style-loader','css-loader','sass-loader'],
                },
                {
                    test:/\.css$/i,
                    use:['style-loader','css-loader'],
                },
                {
                    test:/\.(png|jpg)$/i,
                    type:'asset/resource',
                },
                {
                    test:/\.csv$/i,
                    use:['csv-loader'],
                },
                {
                    test:/\.yaml$/i,
                    type:'json',
                    use:['csv-loader'],
                    parser:{
                        parse:yaml.parse
                    }
                },
                {
                    test:/\.json5$/i,
                    type:'json',
                    parser:{
                        parse:json5.parse
                    }
                }
            ],
        },
};