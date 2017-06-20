$( document ).ready(function() {
    var mark=true;
    $(".play").click(function(){
        if(mark){
            $("#music").trigger('play');
            $(this).addClass("rotate");
            mark=false;
        }else{
            $("#music").trigger('pause');
            $(this).removeClass("rotate");
            mark=true;
        }

    
    });
    //获取歌词
    var txt=$("#text").val().split("[");
   // console.log(txt);
   var html="";
    for(var i=0;i<txt.length;i++){
        var arr=txt[i].split("]");
        
        //获取歌词播放的时间
            var time=arr[0].split(".");
            var timer=time[0].split(":");

            //把时间转换为秒数
            var sec=timer[0]*60+timer[1]*1;
            //console.log(sec);
        //用p标签来保存每一句歌词文本
        if(arr[1]){
            html+="<p id="+sec+">"+arr[1]+"</p>";
         }
        
        
    }
//console.log(html);
//把歌词放入内容区
$(".content").html(html);

//监听
    var num=0;
    $("#music").on('timeupdate',function(){
        
        var currT=parseInt(this.currentTime);
        
        //console.log(currT);

        if(document.getElementById(currT)){
            for(var i=0;i<$("p").length;i++){
                $("p").removeClass('active');
            }
            document.getElementById(currT).className="active";
        if($("p").eq(num+7).attr("id")==currT){
            //console.log($("p").eq(num+7).attr("id"));
            $(".content").css("top",-20*num+'px');
            num++;
        }
     }

    });

});