/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

var clickcount=0;
var wrongcount=0;
var data;

function main() {




    data=JSON.parse(ui.getConfigJSON());
    ui.logd("打印一下json"+ui.getConfigJSON());


    //  打开微信
    utils.openApp("com.tencent.mm");
    toast("打开微信！");

    var ac = "com.tencent.mm.ui.LauncherUI";
    var act= waitExistActivity(ac,10000);


    to_tongxunlu(); //第一步通讯录




    to_newfriedn(); //第二步 新的朋友


    ClickStar();
}

function  ClickStar() {




    //循环20次找按钮
    for(var i=0;i<50;i++){
        let nodeitems= node();

        logd(nodeitems);
        if ( nodeitems==null) {
            Rollsrceen();
            toast("滑动屏幕："+i)
        }else{
            break;
        }
    }

    while(true){
        var nodelist= node();
        toast("开始点击："+nodelist.length);

        for(var j=0;j<nodelist.length;j++){

            var item= clz("android.widget.Button").text("接受");
            click(item);  //第三步接受
            sleep(4000);

            // clickPoint(data.btn_x_4,data.btn_y_4);  //第四步完成
            // sleep(6000);

            var wancheng= clz("android.widget.Button").depth(10).text("完成");
            click(wancheng);  //第四步完成
            sleep(6000);




            var faxiaoxi= id("com.tencent.mm:id/g6f").clz("android.widget.TextView").depth(13).text("发消息");
            click(faxiaoxi); //第五步 发消息
            sleep(3000);

            var imgbtn_gengduo= clz("android.widget.ImageButton").desc("更多功能按钮，已折叠");
            click(imgbtn_gengduo); //第六步更多
            sleep(3000);

            // clickPoint(data.btn_x_7,data.btn_y_7);  //第四步完成 //第七步我的收藏
            // sleep(2000);


            var shoucang= text("我的收藏");
            click(shoucang);  //第四步我的收藏
            sleep(3000);

            clickPoint(data.btn_x_8,data.btn_y_8);  //第八步选择消息位置
            sleep(2000);

            // ui.logd(data.btn_x_9+"===最后发送消息===="+data.btn_y_9);
            // clickPoint(data.btn_x_9,data.btn_y_9);  //第九步我的发送

            var fasong= clz("android.widget.Button").depth(7).text("发送");
            click(fasong);  //第九步 发送

            sleep(2000);

            back();
            sleep(2000);
            back();
            sleep(2000);
            back();
            sleep(2000);


            to_tongxunlu();
            sleep(2000);

            to_newfriedn();
            sleep(2000);


            clickcount=clickcount+1;
            for(var i=0;i<50;i++){
                let nodeitemss= node();

                if (nodeitemss==null) {
                    Rollsrceen();
                    toast("滑动屏幕："+i)
                    sleep(2000);
                }else{
                    break;
                }
            }

            toast("执行次数："+clickcount);

            if(clickcount>=50){
                toast("任务完成："+clickcount);
                break;
                exit();
            }
        }
    }



}

function to_shouye() {
    var selector = clz("android.widget.TextView").text("首页");
    var result = click(selector);

    sleep(2000);
    var result = click(selector);
    if (result) {
        toast("点击成功首页");
    } else {
        toast("点击失败首页");
    }
}

function to_tongxunlu() {



    //logd("为什么获取不到："+data);

    var selector = clz("android.widget.TextView").depth(12).text("通讯录");
    click(selector);

   // clickPoint(data.btn_x_1,data.btn_y_1);

    sleep(2000);

}

function  to_newfriedn() {

    clickPoint(data.btn_x_2,data.btn_y_2);
    sleep(2000);

}

function  node() {
    var list= clz("android.widget.Button").text("接受").getNodeInfo(3000);


    return  list;
}
function Rollsrceen(){

    swipeToPoint(600,1600,600,600,100);
    sleep(1000);
}

function RollsrceenUp(){

    swipeToPoint(600,600,600,1600,100);
    sleep(1000);
}

main();