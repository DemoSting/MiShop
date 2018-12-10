
//控制卡片切换
$(function () {
    var $div = $('.seckill-head ul li');

    //没有触发点击事件的时候，显示一页。
    $('.J_seckill > ul').eq(0).show()
        .siblings().hide();

    $div.click(function () {
        $(this).attr('id','change_color')
            .siblings().removeAttr('id','change_color');
        var index = $div.index(this);//获取点击事件的index
        $('.J_seckill > ul')
            .eq(index).show()
            .siblings().hide();
        return false;
    });
});

//搜索按钮颜色
$(function () {
    var search_text = $('.search-text');
    search_text.mouseover(function () {
        $(this).css('border-color','#9c95ef');
        $('.search-btn').css('border-color','#9c95ef')
    });
    search_text.mouseout(function (){
        $(this).css('border-color','#e0e0e0');
        $('.search-btn').css('border-color','#e0e0e0');
    });

    search_text.click(function () {
        $(this).css('border-color','#ff6700');
        $('.search-btn').css('border-color','#ff6700')
    })
});

//购物车鼠标滑过
$(function () {
    var btn = $('.buy-car-btn');
    btn.hover(function () {
        $('.buy-car-btn a').css('color','#ff6700');
        $('.buy-car-f').slideDown();
    },function () {
        $('.buy-car-btn a').css('color','white');
        $('.buy-car-f').slideUp();
    })
});
