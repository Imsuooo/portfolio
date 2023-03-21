//커버 사이즈
function coverH(){
   let headerH= $('#header').innerHeight()|| height();
    $('.cover-text-area').css({height:headerH})
}
setInterval(coverH,20)


//말풍선 색 채우기
bubbleFill()
function bubbleFill(){
    $('.text-box1').mouseover(function(){
        $(this).find('.cls-1').css({'fill':'#5e1eea'})
        $(this).find('h4').css({'color':'#FED932'})
        $('.info').css({'color':'#FED932'})
    })
    $('.text-box1').mouseleave(function(){
        $(this).find('.cls-1').css({'fill':'none'})
        $(this).find('h4').css({'color':'#5e1eea'})
        $('.info').css({'color':'#5e1eea'})
    })
    $('.text-box2').mouseover(function(){
        $(this).find('.cls-1').css({'fill':'#5e1eea'})
        $(this).find('h4').css({'color':'#FED932'})
        $('.project').css({'color':'#FED932'})
    })
    $('.text-box2').mouseleave(function(){
        $(this).find('.cls-1').css({'fill':'none'})
        $(this).find('h4').css({'color':'#5e1eea'})
        $('.project').css({'color':'#5e1eea'})
    })
}

//about 위치
$('.info').click(function(){
    let offset = $('.about').offset();
    console.log(offset)
    $('html').animate({scrollTop : offset.top - 100}, 400);
});
//project 위치
$('.project').click(function(){
    let offset = $('.project-list').offset();
    console.log(offset)
    $('html').animate({scrollTop : offset.top - 100}, 400);
});


//프로젝트 텍스트 부분 높이
function titleH(){
    let imgH= $('.img-area').innerHeight()|| height();
    if($(window).width()>1200){$('.top-area>.text').css({height:imgH})}
    else{
        $('.top-area>.text').css({height:'100%'})
    }

 }
 setInterval(titleH,20);

 
 //해당 프로젝트 이동
$('.urbanLaunderette').click(function(){
    let offset = $('.project-make1').offset();
    $('html').animate({scrollTop : offset.top}, 400);
});
$('.freitag').click(function(){
    let offset = $('.project-make2').offset();
    $('html').animate({scrollTop : offset.top}, 400);
});
$('.maeil').click(function(){
    let offset = $('.project-make3').offset();
    $('html').animate({scrollTop : offset.top}, 400);
});

//top이동 버튼
$('.topBtn2').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:'0'}, 100);
  });

  $(window).scroll(
    function(){
        const wt = $(window).scrollTop();
        $('.topBtn').addClass('active')
        if(wt==0){
            $('.topBtn').removeClass('active')
            $('.project-btn').css({display:'none'})
        }
    }
)

//btn 슬라이드
$('.list-btn').click(()=>{
    $('.project-btn').slideToggle();
})

//page btn
$('.list01').click(()=>{
    let offset = $('.project-make1').offset();
    $('html').animate({scrollTop : offset.top}, 400);
})
$('.list02').click(()=>{
    let offset = $('.project-make2').offset();
    $('html').animate({scrollTop : offset.top}, 400);
})
$('.list03').click(()=>{
    let offset = $('.project-make3').offset();
    $('html').animate({scrollTop : offset.top}, 400);
})