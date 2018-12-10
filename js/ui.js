//函数
$.fn.UiSearch = function(){
    var ui = $(this);
    $('.ui-search-selected',ui).on('click',function () {
        $('.ui-search-list',ui).show();
        return false;
    });

    $('.ui-search-list a',ui).on('click',function () {
        $('.ui-search-selected',ui).text($(this).text());
        $('.ui-search-list').hide();
    });

    $('body').on('click',function () {
        $('.ui-search-list').hide();
    });
};

$.fn.UiBack = function(){
    var ui = $(this);
    var ht = $('<a class="back_to_top" href="#">hahahah</a>');
    ui.append(ht);
    var windowHeight = $(window).height();

    $(window).on('scroll',function () {
        var top = $('body').scrollTop();
        if(top > windowHeight){
            ht.show();
        }else{
            ht.hide();
        }
    })
};


// 代码逻辑
$(function () {
    $('.ui-search').UiSearch();
    $('body').UiBack();
});

