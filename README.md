# dingdong-ios
# 30行代码写了个ios叮咚抢菜脚本

# 前言

大家好，我是Fly哥，好久不见。已经在上海被封太久了， 这段时间一直致力于 两个字  "抢菜"， 居委会也不发东西，只能靠抢菜。

但是抢菜有个痛点， 就是

1. 第一你是早起， 5.40 你可能就要起来， 或者 8.20 这个时间段，但是说句实话，臣妾做不到，这样太影响我的工作状态， 每天都提不起劲哇。于是就有了第二种方案 
2. 就是在叮咚有运力同时 有菜的时候可以通知我， 然后呢我就可以去抢，不就可以了。 

主要是针对ios 用户， 安卓的已经有对应的脚本， 下面就跟着我的步伐一步一步去实现。

# 第一步

安装抓包工具 **stream** , iOS 直接去应用市场去搜索如图： 

![image-20220412210015752](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412210015752.png)



# 第二步

进入抓包工具， **安装https 证书**，由于叮咚买菜的接口是https。 

![image-20220412210824404](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412210824404.png)



然后跳转到这个页面 去安装 ，这里有可能你的**safari** 网络没有打开， 去设置把网络打开就可以

<img src="https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412210929217.png" alt="image-20220412210929217" style="zoom:33%;" />

然后去打开设置找到通用

![image-20220412211000073](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412211000073.png)

然后 **关于本机拉到最下面**： 

![image-20220412211048645](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412211048645.png)

找到证书  点击信任就可以了。 然后安装是否成功 看这张图：

<img src="https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412210929217.png" alt="image-20220412210929217" style="zoom:33%;" />

我这个就是安装成功的

# 第三步

1. 点击开始抓包：

   ![image-20220412212351926](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212351926.png)

1. 打开叮咚买菜小程序

2. 随便买一件东西 跳转到购物车页面

   ![image-20220412212404003](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212404003.png)

3. 停止抓包，点击软件的抓包历史 ， 点击按照 域名 找到叮咚的域名

![image-20220412212421718](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212421718.png)

1. 然后再抓包的请求中找到  https://maicai.api.ddxq.mobi/order/getMultiReserveTime 这个请求

![image-20220412212506475](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212506475.png)

1. 导出curl 命令 （**这个后面脚本是有用的， 可以先复制下**）

![image-20220412212522527](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212522527.png)



# 第四步

安装ios 推送工具 Bark 

![image-20220412212834901](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212834901.png)

第二步： 

![image-20220412212955986](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412212955986.png)

然后复制这个url , 因为这个URL 是带声音的 ，不然抢到菜了，  **你不清楚。 app 后面的每个都不一样**， 但是 推送铃声你是可以自定义的，可以修改为 **叮咚通知你抢菜了** 啥的 都可以



# 第五步

这里先说一下，如果 **你的电脑 没有node js 环境， 建议先去官网安装一下**： 

![image-20220412213820765](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412213820765.png)



## 脚本替换

Time 表示每隔几秒去查询一次， 然后吧刚才你复制的两个东西在下面 替换 就可以了

```js
const { exec } = require("child_process");
const time = 5 
const curl = `
  替换1 (第一次复制的内容)
`;

const push =
  "curl 替换2（第二次复制的内容）";

// 运力查询
function fullFlag() {
  xxxxx
}

setInterval(() => {
  fullFlag();
}, 1000 * time);
```

完整代码 关注公众号  **前端图形**  回复 **脚本** 二字 自动发送脚本链接 ，或者是脚本有问题的， 都可以找我交流。

## 脚本执行 

```js
node buy.js
```



# 第六步

今天脚本一直跑的， 大概在下午 2点多抢到菜了

如图：

![res](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412214556275.png)

脚本的提示效果如下

![image-20220412214904617](https://ztifly.oss-cn-hangzhou.aliyuncs.com/image-20220412214904617.png)



# 最后

关注公众号 **前端图形**  回复**脚本**二字， 获取**github** 链接， 最后祝愿在上海的小伙伴，都抢到菜。
