$(function () {
    var node = $('.clearfix');
    var country = $('.reg-select-regions');
    var phone = $('.listwrap');
    var area1 = $('.country-container-panel');
    var area2 = $('.country-tel-container-panel');
    colorChange(node);
    clickVisble(country,area1);
    clickVisble(phone,area2);
    liClickCoun();
    liClickPhone();
    blanckHide();
    // clickBody();
});

/*
* 鼠标滑过改变颜色
* @metod colorChange
* @for NodeList
*/
function colorChange(node) {
    node.hover(function () {
        $(this).css('background-color','#eaeaea');
    },function () {
        $(this).css('background-color','white');
    })
}

/*
* 点击国家地区替换手机区号
* @metod liClickCoun
* @for NodeList
*/
function liClickCoun() {
    $('.clearfix').click(function () {
        var text = $(this).children().text();
        var select = '.clearfix-phone:contains(' + text + ')';
        //获取地区名称
        var area = $(select).find('.record-country').text();

        //判断地区名称是否相等，相同则更改手机区号
        if(area === text){
            //获取手机区号
            var phone = $(select).find('.record-phone').text();
            $('#select-cycode-result').text(phone);
        }

        //更改地区选择表单内容
        $('.result-select-regions').text(text);
        //添加display属性
        $('.country-container-panel').addClass('country-hiden');
    })
}

/*
* 点击显示替换区号
* @metod liClickPhone
* @for NodeList
*/
function liClickPhone() {
    $('.clearfix-phone').click(function (e) {
        // find查找所有的子元素，会一直查找，跨层级查找；
        // children 查找直接的子元素，不会跨层级查找。
        var text = $(this).find('.record-phone').text();
        $('#select-cycode-result').text(text);
        $('.country-tel-container-panel').addClass('country-hiden');
    })
}

/**
 *点击显示/关闭下拉选项
 *@method clickVisble
 *@for NodeList
 */
function clickVisble(node,area) {
    node.click(function () {
        if(area.css('display') === 'none'){
            area.removeClass('country-hiden');
        }else{
            area.addClass('country-hiden');
        }
        //jq return false 可以取消冒泡
        return false;
    })
}

/**
 * 点击空白处隐藏下拉选项
 * @method blanckHide
 * @for NodeList
 */
function blanckHide() {
    $('body:not(.container-country)').click(function () {
        $('.country-container-panel').addClass('country-hiden');
        $('.country-tel-container-panel').addClass('country-hiden');
    })
}
