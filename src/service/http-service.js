const ServiceTool = {};

ServiceTool.getDataFormApi = function(callBack){
    var routerUrl = "./src/service/user.json";

    $.ajax({
        type:"get",
        url:routerUrl,
        dataType:"json",
        success:function(data){
            callBack(data);
        },error:function(){
            console.log('请求出错了哦，请稍后再试！');
        }
    });

}

export default ServiceTool;
