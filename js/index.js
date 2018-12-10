$(document).ready(function () {
    shopping_cart();
    navSlidown();
    hoverSlideUp();
    childrenWidthToggle();

    seachHover();
    //图片轮播
    picCarousel();
});


/**
 * 侧边导航栏，当列表等于四的时候，缩小width
 * @method childrenWidthToggle
 * @for NodeList
 */
function childrenWidthToggle() {
    var cat = $('.category-item');
    cat.mouseover(function () {
        var child = $(this).children('.children-col-1');
        var child_length = child.children().length;
        if(child_length < 4){
            var newWidth = child_length * 265 + "px";
            child.find('li').css('width','264px');
            child.css('width',newWidth);
        }else{
            newWidth = 248 * 4 + "px";
            child.css('width',newWidth);
            child.find('li').css('width','246px');
        }
        child.show();
    });

    cat.mouseout(function () {
        $(this).children('.children-col-1').hide();
    })
}


/**
 * 滑入导航下拉
 * @method navSlidown
 * @for NodeList
 */
function navSlidown() {
    var nav_ul = $('.nav_navbar-nav > ul');
    var nav_li = $('.nav_navbar-nav > ul > li');
    nav_li.hover(function () {
        $(this).children('.nav-children-list').show();
    },function () {
        $('.nav-children-list').hide();
    })
}


/**
 * 导航栏滑入上拉
 * @method hoverSlideUp
 * @for NodeList
 */
function hoverSlideUp() {
    $('.shanbuy li').hover(function () {
        $(this).find('div.phone-comment').slideToggle();
    })
}


/**
 * 移入购物车下拉显示信息
 * @method shopping_cart
 * @for NodeList
 */
function shopping_cart(){
    var btn = $('.buy-car-btn');
    btn.hover(function () {
        $('.buy-car-btn a').css('color','#ff6700');
        $('.buy-car-f').slideDown();
    },function () {
        $('.buy-car-btn a').css('color','white');
        $('.buy-car-f').slideUp();
    })
}


/**
 * 移入变色
 * @method seachHover
 * @for NodeList
 */
function seachHover() {
    var search_text = $('.search-text');
    if($('.slide-search-list').css('display') === "none"){
        search_text.hover(function () {
            search_text.css('border-color','#ff6700')
                .siblings().css('border-color','#ff6700');
        })
    }
}


/**
 * 总的
 * @method picCarousel
 * @for NodeList
 */
function picCarousel() {
    num = 0;
    length = 5;
    var delay = 4000;
    //设置自动轮播
    var timespan = setInterval(scrollPicsPlay,delay);

    // 鼠标悬浮不轮播
    $('.slide-loaded-container').mouseenter(function () {
        clearInterval(timespan);
    }).mouseleave(function () {
        timespan = setInterval(scrollPicsPlay,delay);
    });

    // 点击小圆点显示对应图片
    $('.slide-loaded-span').on('click',function () {
        var index = $(this).index();
        showImg(index);
    });

    // 给上一页绑定事件
    $('.slide-left').on('click',function () {
        num--;
        if(num < 0){
            num = length - 1;
        }
        showImg(num);
    });

    // 给下一页绑定事件
    $('.slide-right').on('click',function () {
        num++;
        if(num >= length){
            num = 0;
        }
        showImg(num);
    })
}


/**
 * 图片轮播
 * @method blanckHide
 * @for NodeList
 */
function showImg(n) {
    $('.slide-loaded-container img').eq(n).fadeIn(1500).siblings().fadeOut(1500);
    $('.slide-loaded-span').eq(n).addClass("current")
        .siblings().removeClass('current');
}


/**
 * 自动循环轮播图片
 * @method blanckHide
 * @for NodeList
 */
function scrollPicsPlay() {
    num++;
    if(num >= length){
        num = 0;
    }
    showImg(num);
}

$(document).ready(function () {
    var inNav=false;
    $("nav .list .item").hover(function () {
        index = $(this).index();
        inNav = $(".sub_list").eq(index).stop(true, true)[inNav ? 'show' : 'slideDown']().length > 0;
    }, function (e) {
        //对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点。
        //对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点。
        var t =$( e.relatedTarget);
        if (!t.hasClass('item') || t.find('.sub_list').length === 0) inNav = false;//移动到没有子菜单
        $(".sub_list").eq(index).stop(true,true)[inNav ? 'hide' : 'slideUp']();
    })
});