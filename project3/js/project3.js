$(document).ready(function(){


// 브라우저의 높이값을 찾아라

let winht = $(window).height()


// 화면이 리사이징될떄마다 브라우저의 화면높이를 찾아라

$(window).resize(function(){

    let winht2 = $(window).height()
    $('section').height(winht2)
   
})


$('section').height(winht)

$(window).scroll(function(){

    let sc = $(this).scrollTop()
    let sht = $(window).height()
    $('h1').text(sc);


    if(sc>=sht*0 && sc<sht*1){
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(0).addClass('on')

        }
        if(sc>=sht*1 && sc<sht*2){
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(1).addClass('on')

        }
        if(sc>=sht*2 && sc<sht*3){
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(2).addClass('on')

        }
        if(sc>=sht*3 && sc<sht*4){
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(3).addClass('on')

        }   

    
})


// GNB  li를 클릭할때, 순번을 찾고 섹션의 높이값에 곱해서 스크롤top을 움직여라
$('.gnb li').click(function(){
    let ht = $('section').height()
    let i = $(this).index()
    
    console.log(i)
    
    $('html,body').animate({'scrollTop':ht*i},1400);
    
    $('.gnb li').removeClass('on')
    $(this).addClass('on')
    
    })




 $('.gnb li').click(function(){

   var i = $(this).index()
     console.log(i)
    $('section').removeClass('on')

     $('section').eq(i).addClass('on')

})





// 섹션에서 마우스휠 했을때, 화면이 움직인다.
$('section').mousewheel(function(e,delta){

       
    event.preventDefault
    
    if(delta>0){

// 마우스를 올리면 이전화면으로 움직이고
let prev = $(this).prev().offset().top
$('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
}

if(delta<0){
// 마우스를 내리면 다음화면으로 움직인다.
let next = $(this).next().offset().top
$('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')

}
})

// 메인의 이름이미지가 천천히 나타나라

$('.name img').fadeIn( 5000, function(){


})


// txt_box의 p를 클릭했을때, li의 순번을 찾고 해당 순번에 맞게 ingredient의 li가 보여라

    $('.txt_box p').click(function(){

        var i =$(this).index();
      
        //  $('.filmopt_box img').slideUp()
        //  $('.filmopt_box img').eq(i).slideDown()
        
       
         $('.filmopt_box img').removeClass('on')
        $('.filmopt_box img').eq(i).addClass('on')
         

        $('.txtbox li').removeClass('in')
        $('.txtbox li').eq(i).addClass('in')

        $('.sub_img').width(960)
        $('.filmopt_box').width(600)


        


        
       })      
   
    

$('.profile_txt p').click(function(){
    var a =$(this).index();
    
    $('.profile_photo').show(); 

    $('.profile_photo img').fadeOut(600)
    $('.profile_photo img').eq(a).fadeIn(1000)
    
    $('.profile_txt span').fadeOut(600)
    $('.profile_txt span').eq(a).fadeIn(1000)
    
    
})
$('.profile_photo img').click(function(){
    $('.profile_photo').hide(600);
    $('.profile_txt span').hide(600);

})


    // 아티클에 마우스가 들어갔을떄 아티클의 넓이가 커진다
$('.main .video').mouseenter(function(){

    // 동영상이 재생되게 만들어라.
    var vid = $(this).find('video').get(0)
    // 재생시간지점
    vid.currentTime=4.5;
    vid.play()

// $('article').width(12+'%')
// $(this).width(35+'%')
// 단독으로 진행할시 사용가능 css 에는 transition을 추가함

// article의 넓이가 넚어진 후, 동영상이 플레이 되고, 화면에 글씨가 날아온다.
// $('this').stop.animate({},지속시간,이펙트효과,함수추가가능 function(){})

$(this).stop().animate({'width' : '80%'},1000,function(){
$(this).find('video').stop().animate({'opacity':'1'},1000)



})



})

// 아티클에서 마우스가 떠나면, 다시원래대로 돌아와라랄라.
$('.main .video').mouseleave(function(){



    $(this).stop().animate({'width' : '12%'},1000);
    $(this).find('video').stop().animate({'opacity': '0'})
})

});

// 갤러리설정


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery article img");

    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            images.forEach(img => {
                if (img !== this) {
                    img.classList.add("inactive");
                } else {
                    img.classList.add("active");
                    const corners = this.parentElement.querySelectorAll('.corner');
                    corners.forEach(corner => corner.style.display = 'block');
                }
            });
        });

        image.addEventListener("mouseout", function() {
            images.forEach(img => {
                img.classList.remove("inactive");
                img.classList.remove("active");
                const corners = this.parentElement.querySelectorAll('.corner');
                corners.forEach(corner => corner.style.display = 'none');
            });
        });
    });

    const frames = document.querySelectorAll(".image-frame");

    frames.forEach(frame => {
        const img = frame.querySelector('img');
        frame.addEventListener("mouseover", function() {
            frames.forEach(fr => {
                const frImg = fr.querySelector('img');
                if (frImg !== img) {
                    fr.classList.add("inactive");
                } else {
                    fr.classList.add("active");
                }
            });
        });

        frame.addEventListener("mouseout", function() {
            frames.forEach(fr => {
                fr.classList.remove("inactive");
                fr.classList.remove("active");
            });
        });
    });






})




