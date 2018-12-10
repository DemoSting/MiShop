$(function () {
    clickSlideDown();
    clickBlank();
});


/**
 * 点击搜索框下拉菜单
 * @method clickSlideDown
 * @for NodeList
 */
function clickSlideDown() {
    var search_text = $('.search-text');
    var slide_search = $('.slide-search-list li');

    search_text.click(function () {
        $('.slide-search-list').css('border-color','#ff6700').show();

        //清除事件冒泡
        // event.stopPropagation();
        return false;
    });

    //点击列表选项，将选项内容添加到input框里面
    slide_search.click(function () {
        var text = $(this).find('span').first().text();
        search_text.val(text);
    })
}

/**
 * 点击搜索框以外部分收起菜单
 * @method clickBlank
 * @for NodeList
 */
function clickBlank() {
    $('body :not(input.search-text)').click(function () {
        $('.slide-search-list').hide();
    });
}