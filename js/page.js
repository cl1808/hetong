//找到ul下所有的li元素，遍历每个li
$("ul.pagination>li.page-item").each(function(i,elem){
  //获得正在遍历的元素
  var $elem=$(elem);
  //给当前元素绑定事件处理函数
  $elem.click(function(){
    //获得当前单击的元素
    var $elem=$(this);
    //i是当前元素的下标 如果当前点击元素的i==0或i==1时
    if(i==0||i==1){
      //就让id为content1的元素显示，并隐藏id为content2的元素
      $("#content1").css("display","block");
      $("#content2").css("display","none");
      //如果下标为1
      if(i==1){
        //就给当前元素添加active class，并给当前元素的下一个兄弟移除active
        $elem.addClass("active")
        .next().removeClass("active");
      }else{//否则
        //就给当前元素的下一个兄弟添加active class，并给当前元素的下一个兄弟的下一个兄弟移除active
        $elem.next().addClass("active")
        .next().removeClass("active");
      }
    }else{//否则
      //就让id为content1的元素隐藏，并显示id为content2的元素
      $("#content1").css("display","none");
      $("#content2").css("display","block");
      if(i==2){
        //就给当前元素添加active class，并给当前元素的前一个兄弟移除active
        $elem.addClass("active")
        .prev().removeClass("active");
      }else{
        //就给当前元素的前一个兄弟添加active class，并给当前元素的前一个兄弟的前一个兄弟移除active
        $elem.prev().addClass("active")
        .prev().removeClass("active");
      }
    }
  })
})
