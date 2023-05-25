//引入一个包
const path = require('path');

//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//webpack中的信息都应写在module.exports中
module.exports={

    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目录
    output:{
        //指定打包文件的目录
        path:path.resolve(__dirname,'dist'),

        //打包后文件的文件夹
        filename:"bundle.js"
    },

    //指定webpack打包时使用的模块
    module:{
        //指定要加载规则
        rules:[
            {
                //指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件
                exclude:/node-modules/
        }]
    },

    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(),
    ],

    //用来设置引用模块
    resolve:{
        extends: ['.ts','.js']
    }


}