$(document).ready(function(){

    // color의 li를 클릭했을때, li의 순번을 찾고 해당 순번에 맞게 ingredient의 li가 보여라

    $('.color li').click(function(){

        var i =$(this).index();
        $('.ingredient li').removeClass('on')
        $('.ingredient li').eq(i).addClass('on')
            
    })
//     $('.txtBox p').click(function(){

// var i =$(this).index();
//    // 모든 이미지를 숨기고 선택된 이미지를 초기 위치로 설정
// $('.recipe img').css({'right': '-100px'}).hide();
// $('.recipe img').eq(i).show().css({'right': '100%'}).animate({'right': '0%','transform': 'rotate(0deg)'}, 1000);

// })

$('.txtBox p').click(function() {
    var i = $(this).index();
    
    // 모든 이미지를 숨기고 선택된 이미지를 초기 위치로 설정
    $('.recipe img').css({'left': '-100%', 'opacity': 0, 'transform': 'rotate(0deg)'}).hide();
    
    // 선택된 이미지를 보여주고 애니메이션 적용
    var $img = $('.recipe img').eq(i);
    $img.show().css({'left': '100%', 'opacity': 1, 'transform': 'rotate(0deg)'});
    
    setTimeout(function() {
        $img.css({'left': '0%', 'transform': 'rotate(360deg)', 'opacity': 1});
    }, 10); // reflow time
});
    
// 123을반복해라
var i = 0

setInterval(function(){
i++;

if (i==3)i=0
// ==는 돌아갈 이미지의 개수와 동일
console.log(i)
$('.part1 li').eq(i-2).css({'left':'100%'}).stop().animate({'left':'0%'})
$('.part1 li').eq(i-1).css({'left':'50'}).stop().animate({'left':'100%'})
$('.part1 li').eq(i).css({'left' : '0%'}).stop().animate({'left':'50%'})
},3000);


// recipe li를 클릭했을때 li의 순번을 찾고 해당순번에 맞게 recipe_box의 p가보여라
$('.recipe img').click(function(){

    var i =$(this).index();
    
    $('.recipe_box').show();
    
    $('.recipe_box p').eq(i).slideDown(800)
        
})
$('.recipe_box span').click(function(){

    $('.recipe_box p').slideUp(800);
        
})


$('.shop').hide();
 // 장바구니를 클릭하면 shop이 보여라 
 $('.shopcart').click(function(e){
    e.preventDefault();

    $('.shop').css({'display':'flex'})


})
// .shop에 있는 reset을 클릭하면 shop이 사라져라 
$('.reset').click(function(){
   

    $('.shop').css({'display':'none'})
});



// var cartCount = 0;
// var cartItems = {};
// var totalPriceAll = 0; // 전체 가격을 저장하는 변수

// // cart를 클릭했을때 숫자(변수)가 증가하게 만들고
// // 그 숫자를 shopcart의 span에 출력해라
// $('.cart').click(function(e) {
//     e.preventDefault();
//     cartCount++;
//     $('.shopcart').find('span').text(cartCount);
    
//     // 이미지의 alt 속성을 사용하여 제품 ID를 생성
//     var productId = $(this).closest('li').find('img:first').attr('alt');
//     var price = parseFloat($(this).closest('a').find('.price').text().replace('￦', ''));
//     var imgHtml = $(this).closest('a').find('p').html();

//     // 제품이 이미 장바구니에 있는 경우
//     if (cartItems[productId]) {
//         cartItems[productId].quantity++;
//         cartItems[productId].totalPrice += price;
//         $('#' + productId + '-quantity').text('수량: ' + cartItems[productId].quantity);
//         $('#' + productId + '-totalPrice').text('가격: ￦' +  Math.round(cartItems[productId].totalPrice));
//     } else {
//         // 제품이 장바구니에 없는 경우
//         cartItems[productId] = {
//             imgHtml: imgHtml,
//             quantity: 1,
//             totalPrice: price
//         };
//         $('.shop').find('.list').append(
//             '<div id="' + productId + '" style="display: flex; align-items: center; margin-bottom: 10px;">' +
//             imgHtml + 
//             '<div style="margin-left: 10px;">' +
//             '<div id="' + productId + '-quantity">수량: ' + cartItems[productId].quantity + '</div>' +
//             '<div id="' + productId + '-totalPrice">가격: ￦' +  Math.round(cartItems[productId].totalPrice) + '</div>' +
//             '</div>' +
//             '</div>'
//         );
//     }

//     // 전체 가격 업데이트
//     totalPriceAll += price;
//     $('#total-quantity').text('전체 수량: ' + cartCount);
//     $('#total-price').text('전체 총액: ￦' +  Math.round(totalPrice));
    
// });


var cartCount = 0;
var cartItems = {};
var totalPriceAll = 0; // 전체 가격을 저장하는 변수

// cart를 클릭했을때 숫자(변수)가 증가하게 만들고
// 그 숫자를 shopcart의 span에 출력해라
$('.cart').click(function(e) {
    e.preventDefault();
    cartCount++;
    $('.shopcart').find('span').text(cartCount);
    
    // 이미지의 alt 속성을 사용하여 제품 ID를 생성
    var productId = $(this).closest('li').find('img:first').attr('alt');
    var price = parseFloat($(this).closest('a').find('.price').text().replace('￦', ''));
    var imgHtml = $(this).closest('a').find('p').html();

    // 제품이 이미 장바구니에 있는 경우
    if (cartItems[productId]) {
        cartItems[productId].quantity++;
        cartItems[productId].totalPrice += price;
        $('#' + productId + '-quantity').text('수량: ' + cartItems[productId].quantity);
        $('#' + productId + '-totalPrice').text('합계: ' + Math.round(cartItems[productId].totalPrice).toLocaleString() + '원');
    } else {
        // 제품이 장바구니에 없는 경우
        cartItems[productId] = {
            imgHtml: imgHtml,
            quantity: 1,
            totalPrice: price
        };
        $('.shop').find('.list').append(
            '<div id="' + productId + '">' +
            imgHtml + 
            '<div id="' + productId + '-quantity">수량: ' + cartItems[productId].quantity + '</div>' +
            '<div id="' + productId + '-totalPrice"> 합계:' + Math.round(cartItems[productId].totalPrice).toLocaleString() + '</div>' +
            '</div>'
        );
    }

    // 전체 수량 및 총액 업데이트
    updateTotalSummary();
});

function updateTotalSummary() {
    var totalQuantity = 0;
    var totalPrice = 0;
    for (var key in cartItems) {
        totalQuantity += cartItems[key].quantity;
        totalPrice += cartItems[key].totalPrice;
    }
    $('#total-quantity').text('전체 수량: ' + totalQuantity);
    $('#total-price').text('총 상품 가격: ' + Math.round(totalPrice).toLocaleString() + '원');
}

 // empty 버튼 클릭 시 장바구니 초기화
 $('.empty').click(function() {
    cartCount = 0;
    cartItems = {};
    $('.shopcart').find('span').text(cartCount);
    $('.shop .list').empty();
    $('#total-quantity').text('전체 수량: 0');
    $('#total-price').text('총 상품 가격: 0');
});





let windowHeight = $(window).height()

// home 스크롤 이벤트
const homeEventHandler = () => {
    const Text1 = document.querySelector('.history h3');
    const Text2 = document.querySelector('.history p');
    const Text3 = document.querySelector('.history .fade');
    const Text4 = document.querySelector('.history2 h2');

    // window 화면 상단에서 한 요소의 가장 높은 위치까지 크기와 윈도우 높이를 비교
    if (Text4.getBoundingClientRect().top < windowHeight - 5) {
        setTimeout(() => {
            Text1.style.display = "block";
            // 화면에 시간 간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
            setTimeout(() => {
                Text2.style.display = "block";
                Text3.style.display = "block";
            }, 600);
        }, 300);
        
        // 성능 최적화를 위하여 한번 사용한 eventListener를 제거 => 딱 한번만 동작하게 됨
        window.removeEventListener('scroll', homeEventHandler);
    }
};

// 스크롤 이벤트 등록
window.addEventListener('scroll', homeEventHandler);




    })

    