# RNdemo
跟着官网学习react-native

## 新手入门踩坑记录

1. 关于环境搭建问题
    - 目前RN是0.55版本，但是最新版本的RN使用时在Mac OS系统下会出现报错运行不起来。Windows,Linux系统未测试尚不清楚。Mac OS安装0.51.1版本即可正常使用。报错代码如下:<br>
    ```bash
        ...
        Print: Entry, ":CFBundleIdentifier", Does Not Exist
        ...
    ```    
2. 关于react-navigation的问题
    - `react-navigation`在使用`StackNavigator`方法进行创建新的screen运行是正常的但是在调试的时候就会有警告：用`createStackNavigator`方法代替`StackNavigator`方法。
3. 关于长列表FlatList或是SectionList的问题
    - 长列表在渲染数组的时候,里面必须要有个key,不然就会出现没有key的黄色警告

## 学习建议

1. 一般跟着官网的demo学习的小伙伴都会跟着官网的章节一节一节的学习,习惯性好点的可能就跟着敲着代码加强记忆。这里我想说的是，咱们在跟着官网学习完[搭建开发环境](https://reactnative.cn/docs/0.51/getting-started.html#content)后可以跳到[使用导航器跳转页面](https://reactnative.cn/docs/0.51/navigation.html#content)学习，试想一下我们在开发的时候搭建完项目后,是不是要从首页开始开发,一个项目的结构树先想象出来。所以咱们可以先用`react-navigation`将项目的目录划分出来。
2. 按本项目分析，根目录下的[index.js](https://github.com/se7en-1992/RNdemo/blob/master/index.js)文件是RN的入口文件引入的是[App.js](https://github.com/se7en-1992/RNdemo/blob/master/App.js).那么我们就把App.js作为项目的中心js,使用`react-navigation`(个人感觉很像路由设计)控制每个页面的screen,后续可能还有其他配置比如redux. 
3. src作为咱们的开发目录,里面有[components](https://github.com/se7en-1992/RNdemo/tree/master/src/components)(专门的组件目录),[pages](https://github.com/se7en-1992/RNdemo/tree/master/src/pages)(项目的页面),[plugins](https://github.com/se7en-1992/RNdemo/tree/master/src/plugins)(将要用到的插件啊都可以放到这个目录),[static](https://github.com/se7en-1992/RNdemo/tree/master/src/static)(用来存放静态文件)。后面其他目录有需要的可以再加,这样咱们一个大体的项目思维就出来了,一个项目的大概结构也就出来。这样我们在往后学,就可以利用组件化,项目化的思想进行RN的学习了。这样是不是要比一味的跟着敲一步一步的学要好很多呢？
4. 带着设计项目规划项目的思想去学习新知识,然后参考别人的优秀项目,吸取闪光点,集百家之众长,当然这里不是让你抄,而是学设计项目的思想。这样等你学完官网的简单教程后你其实学到的东西已经很多很多了。

## 边学边问

谷歌一下,你就能学到更多 
1. react-native在移动端是如何做到的多终端适配？(学到宽度高度时产生的疑问)   

## 提醒

最好不要将别人的代码,拉下来跑一遍,然后自己的项目根据别人的项目改一下,这样可能你是学会了怎么去使用这个skill,但你永远只是一个代码的搬运工,你永远学不会怎么去搭一个属于自己的真正意义上的项目架构。
