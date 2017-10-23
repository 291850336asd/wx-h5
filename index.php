<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0'/>

<link rel="stylesheet" href="css/swiper.min.css">
<link rel="stylesheet" href="css/animate.min.css">
<link rel="stylesheet" href="css/shine.css">
<link rel="stylesheet" href="css/lineCircle.css">
<link rel="stylesheet" href="css/glowing.css"/>
<script src="js/jquery.min.js"></script>
<script src="js/swiper.min.js"></script>
<script src="js/swiper.animate.min.js"></script>
<script type="text/javascript" src="js/jquery.rotate.min.js"></script>
<link rel="stylesheet" href="css/index.css">
<style type="text/css">
  .swiper-button-next, .swiper-button-prev{
    height: 29px;
  }
</style>
</head>

<body>

<audio id="k_ring" preload="load" loop="loop">
  <source type="audio/mpeg" src="back.mp3">
</audio>
<div class="swiper-container" id="swiper-container-v">
    <section class="poster_wrap load" id="load">
    	  <div class="p_loading">
    	    <div class="p_loading_logo"></div>
    	    <p class="p_loading_tip">正在加载</p>
    	  </div>
  	</section>
    <div class="swiper-wrapper">
         <section class="swiper-slide swiper-slide-v1">
           <img class = "disco1 bg_item_1 bg_item_div" src="images/bg_icon/1.png"/>
           <img class = "disco2 bg_item_2 bg_item_div" src="images/bg_icon/2.png"/>
           <img class = "disco3 bg_item_3 bg_item_div" src="images/bg_icon/3.png"/>
           <img class = "disco4 zooming bg_item_4 bg_item_div" src="images/bg_icon/4.png"/>
           <img class = "disco5 bg_item_5 bg_item_div" src="images/bg_icon/5.png"/>
           <img class = "disco1 bg_item_6 bg_item_div" src="images/bg_icon/6.png"/>
           <img class = "disco2 bg_item_7 bg_item_div" src="images/bg_icon/7.png"/>
           <img class = "disco3 bg_item_8 bg_item_div" src="images/bg_icon/8.png"/>
           <div class="page_container">
             <img id = "page1_title_img" class= "" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" src="images/1/title.png"/>
             <div class="" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
               <div class="video_div">
                   <img class= "video_bg_head" src="images/1/video_bg_head.png">
                   <iframe frameborder="0" id = "videoFrame" class="video_page" src="https://v.qq.com/iframe/player.html?vid=m0388m8zwuc&tiny=0&auto=0" allowfullscreen></iframe>
                   <!-- <video class="video_page" width="100%" loop = "loop" id="videoPlay1" src="https://v.qq.com/iframe/player.html?vid=m0388m8zwuc&tiny=0&auto=0" allowfullscreen controls></video> -->
                   <img id="video_play" src="images/1/video_play.png"/>
               </div>
               <p class="page1_p_text">点击播放视频</p>
            </div>
             <!-- <embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" flashvars="aid=9485341&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed> -->
              <div class="x_bg">
                <img class = "x_page ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" src="images/1/X_page.png"/>
             </div>
             <img class = "page1_now_order" src="images/1/now_order.png"/>
           </div>
         </section>
         <section class="swiper-slide swiper-slide-v2" >
           <img class = "disco1 bg_item_1 bg_item_div" src="images/bg_icon/1.png"/>
           <img class = "disco2 bg_item_2 bg_item_div" src="images/bg_icon/2.png"/>
           <img class = "disco3 bg_item_3 bg_item_div" src="images/bg_icon/3.png"/>
           <img class = "disco4 zooming bg_item_4 bg_item_div" src="images/bg_icon/4.png"/>
           <img class = "disco5 bg_item_5 bg_item_div" src="images/bg_icon/5.png"/>
           <img class = "disco1 bg_item_6 bg_item_div" src="images/bg_icon/6.png"/>
           <img class = "disco2 bg_item_7 bg_item_div" src="images/bg_icon/7.png"/>
           <img class = "disco3 bg_item_8 bg_item_div" src="images/bg_icon/8.png"/>
           <div class="page_container">
             <img id = "page2_title_img" class= "ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" src="images/2/title.png"/>
             <div class = "circle_div">
               <img class = "circle_light_img thisRotate" src="images/2/circle_light.png"/>
               <img class = "circle_star_img thisRotate1" src="images/2/circle_star.png"/>
               <img class = "shalou thisRotateshalou" src="images/2/shalou.png"/>
             </div>
             <div class = "page2_text_div">
                <p class="page2_p_title">乐信黑卡</p>
                <p class="page2_p_title_center"><b>超高消费额度、超低消费利率、超长消费时间</b></p>

                <p class="page2_p_text_first page2_p_text">乐信黑卡是一款以全网个人信用大数据和中国人</p>
                <p class="page2_p_text">民银行个人征信报告为数据基础，提供大额消费</p>
                <p class="page2_p_text">额度的全新金融产品。</p>

                <p class="page2_p_text_first page2_p_text">该卡额度随个人信用变化动态增减，使用额度无</p>
                <p class="page2_p_text">上限，使用年限无上限，永不透支。</p>
             </div>
           </div>
         </section>
         <section class="swiper-slide swiper-slide-v3" >
           <img class = "disco1 bg_item_1 bg_item_div" src="images/bg_icon/1.png"/>
           <img class = "disco2 bg_item_2 bg_item_div" src="images/bg_icon/2.png"/>
           <img class = "disco3 bg_item_3 bg_item_div" src="images/bg_icon/3.png"/>
           <img class = "disco4 zooming bg_item_4 bg_item_div" src="images/bg_icon/4.png"/>
           <img class = "disco5 bg_item_5 bg_item_div" src="images/bg_icon/5.png"/>
           <img class = "disco1 bg_item_6 bg_item_div" src="images/bg_icon/6.png"/>
           <img class = "disco2 bg_item_7 bg_item_div" src="images/bg_icon/7.png"/>
           <img class = "disco3 bg_item_8 bg_item_div" src="images/bg_icon/8.png"/>
           <div class="page_container">
             <img id = "page2_title_img" class= "ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" src="images/3/title.png"/>
             <div class = "circle_div" swiper-animate-effect="rollIn" swiper-animate-duration="1s" swiper-animate-delay="0.4s">
               <img class = "circle_light_img thisRotate" src="images/2/circle_light.png"/>
               <img class = "circle_star_img thisRotate1" src="images/3/circle_star.png"/>
               <img class = "huangguan ThisScale" src="images/3/huangguan.png"/>
             </div>
             <div class = "page3_text_div" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s">
                <p class="page2_p_title">全球限量10000张</p>
                <p class="page2_p_title_center"></p>

                <p class="page2_p_text">90后专属黑卡，随信用增长消费额度，</p>
                <p class="page2_p_text">任意购买房产、小岛、飞船等，</p>
                <p class="page2_p_text"> 信用改变生活，最低可达0息0首付80年还款时限。</p>

                <div class="rights_black_div">
                    <p class="shuli"><b>黑卡特权</b></p>
                    <div class="rights_item_div">
                      <p class="rights_item">专属俱乐部：每年专为黑卡持有者定制的私人聚会。</p>
                      <p class="rights_item rights_item_margin">世代继承：使用年限无上限，信用增长，子孙可继承。</p>
                      <p class="rights_item rights_item_margin">永不透支：随信用累积可消费额度增长，永不透支</p>
                    </div>
                    <div class= "clearfloat"></div>
                </div>
                <p class="page3_bottom_text">注意：本卡不得用于购买军舰、军火、核弹等大型或小型杀伤性武器。</p>
             </div>
           </div>
         </section>
         <section class="swiper-slide swiper-slide-v4" >
           <img class = "disco1 bg_item_1 bg_item_div" src="images/bg_icon/1.png"/>
           <img class = "disco2 bg_item_2 bg_item_div" src="images/bg_icon/2.png"/>
           <img class = "disco3 bg_item_3 bg_item_div" src="images/bg_icon/3.png"/>
           <img class = "disco4 zooming bg_item_4 bg_item_div" src="images/bg_icon/4.png"/>
           <img class = "disco5 bg_item_5 bg_item_div" src="images/bg_icon/5.png"/>
           <img class = "disco1 bg_item_6 bg_item_div" src="images/bg_icon/6.png"/>
           <img class = "disco2 bg_item_7 bg_item_div" src="images/bg_icon/7.png"/>
           <img class = "disco3 bg_item_8 bg_item_div" src="images/bg_icon/8.png"/>
           <div class="page_container">
             <img id = "page2_title_img" class= "ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" src="images/4/title.png"/>
             <p class="page2_p_text page4_title_content_margin">至尊虚拟黑卡，无缝接入Apple pay、VISA、银联、</p>
             <p class="page2_p_text">微信支付、支付宝全消费通道、移动银行全球通用。</p>
             <div class = "circle_div_4" swiper-animate-effect="rollIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
               <img class = "circle_light_img thisRotate" src="images/2/circle_light.png"/>
               <img class = "circle_star_img thisRotate1" src="images/4/circle_star.png"/>
               <img class = "earth" src="images/4/earth_with_bg.png"/>
               <div class = "earth_circle_div">
                 <div><div></div></div>
                 <div><div></div></div>
                 <div><div></div></div>
                 <div><div></div></div>
               </div>
             </div>
             <div class="" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
               <img id = "page2_title_img" src="images/4/bottom_title.png"/>
               <p class="page2_p_text page4_title_content_margin">个人征信全面接入网购及支付平台信用记录，</p>
               <p class="page2_p_text">72小时动态记录信用数据，</p>
               <p class="page2_p_text">自动跟随用户每次支付、借贷及偿还行为，云端计</p>
               <p class="page2_p_text">算信用值，实时智能浮动。</p>
             </div>
           </div>
         </section/>
         <section class="swiper-slide swiper-slide-v5" >
           <img class = "disco1 bg_item_1 bg_item_div" src="images/bg_icon/1.png"/>
           <img class = "disco2 bg_item_2 bg_item_div" src="images/bg_icon/2.png"/>
           <img class = "disco3 bg_item_3 bg_item_div" src="images/bg_icon/3.png"/>
           <img class = "disco4 zooming bg_item_4 bg_item_div" src="images/bg_icon/4.png"/>
           <img class = "disco5 bg_item_5 bg_item_div" src="images/bg_icon/5.png"/>
           <img class = "disco1 bg_item_6 bg_item_div" src="images/bg_icon/6.png"/>
           <img class = "disco2 bg_item_7 bg_item_div" src="images/bg_icon/7.png"/>
           <img class = "disco3 bg_item_8 bg_item_div" src="images/bg_icon/8.png"/>
           <div class="page_container">
             <img id = "page5_title_img" class= "ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" src="images/5/title.png"/>
             <div class= "" swiper-animate-effect="slideInLeft" swiper-animate-duration="0.5s">
               <p class="page5_use_type page5_use_type_title">消费使用方式</p>
               <p class="page5_p_text page5_use_type_margin">黑卡突破传统支付模式，</p>
               <p class="page5_p_text">可通过指纹、虹膜、DNA等高科技技术</p>
               <p class="page5_p_text">确认使用者身份。</p>
               <p class="page5_p_text page5_use_type_margin2">卫星定位商家信息，全网无线支付，</p>
               <p class="page5_p_text">采用最精准快速的支付方式</p>
             </div>
             <div class= "" swiper-animate-effect="slideInRight" swiper-animate-duration="0.5s">
               <p class="page5_mark_type page5_use_type_title">信用累积方式</p>
               <p class="page5_p_text page5_mark_type_margin">1、保持良好的消费习惯、</p>
               <p class="page5_p_text">诚实守信、按时还款</p>
               <p class="page5_p_text page5_use_type_margin2">2、遵纪守法、不随地吐痰、不乱闯红绿灯、</p>
               <p class="page5_p_text">不把共享单车丢湖里</p>
               <p class="page5_p_text page5_use_type_margin2">3、不强行扶老奶奶过马路、不卸车座、</p>
               <p class="page5_p_text">不抠车链、不虐待小动物</p>
             </div>
           </div>
         </section/>
         <section class="swiper-slide swiper-slide-v6" >
           <img class = "disco1 bg_item_1 bg_item_div" src="images/bg_icon/1.png"/>
           <img class = "disco2 bg_item_2 bg_item_div" src="images/bg_icon/2.png"/>
           <img class = "disco3 bg_item_3 bg_item_div" src="images/bg_icon/3.png"/>
           <img class = "disco4 zooming bg_item_4 bg_item_div" src="images/bg_icon/4.png"/>
           <img class = "disco5 bg_item_5 bg_item_div" src="images/bg_icon/5.png"/>
           <img class = "disco1 bg_item_6 bg_item_div" src="images/bg_icon/6.png"/>
           <img class = "disco2 bg_item_7 bg_item_div" src="images/bg_icon/7.png"/>
           <img class = "disco3 bg_item_8 bg_item_div" src="images/bg_icon/8.png"/>
           <div class="page_container">
             <img id = "page2_title_img" class= "ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="0.5s" src="images/6/title.png"/>
             <div class = "circle_div_6" swiper-animate-effect="rollIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
               <img class = "circle_light_img thisRotate" src="images/6/ourter_circle.png"/>
               <img class = "circle_star_img thisRotate1" src="images/6/circle_star.png"/>
               <img class = "inner_circle ThisScale" src="images/6/inner_circle.png"/>
               <img class = "userhead" src="images/6/user.png"/>
             </div>

             <div class= "" swiper-animate-effect="zoomIn" swiper-animate-duration="1s">
               <p class="page6_p_text page6_line_margin_first">1.年龄:年满18周岁，1990年以后出生的中华人民共和</p>
               <p class="page6_p_text">国公民，申办需持有中华人民共和国二代身份证</p>
               <p class="page6_p_text page6_line_margin">2、征信审核：无不良征信记录</p>
               <p class="page6_p_text page6_line_margin">3、收入审核：有正规工作且有固定收入</p>
               <p class="page6_p_text page6_line_margin">4、互联网ID：无频繁更换账号、及违约、</p>
               <p class="page6_p_text">违规和逾期情况</p>
               <p class="page6_p_text page6_line_margin">5、全球限量发行10000张，至尊权益，先约先得</p>
             </div>

             <div class="page6_now_div">
               <img class = "page6_now_order" src="images/6/now_order.png"/>
               <img class = "page6_now_share" src="images/6/now_share.png"/>
             </div>
           </div>
         </section/>
    </div>

    <div class="overLayer overLayer_share hide" id="shareLayer_input">
       <div class="input_bg_div">
         <p class="float_phone_text">输入你的手机号</p>
         <p class="float_phone_text2"> 获得乐信黑卡预约码</p>
         <div class="input_bg">
           <input id = "inputphone" type="number"/>
         </div>
         <img class = "float_confirm" src="images/float/1/confirm_button.png"/>
       </div>
    </div>
    <div class="overLayer overLayer_success hide" id="shareLayer_share">
      <div class="share_div">
        <img class = "share_icon ThisScaleShare" src="images/float/3/share_icon.png"/>
        <img class = "share_text" src="images/float/3/share_text.png"/>
      </div>
       <div class="share_bg_div">
         <p class="success_text">ASFDASGA</p>
         <p class="float_phone_text2">预约成功！</p>
         <p class="float_phone_text2">具体信息请关注官方公告</p>
         <img class="line_img" src="images/float/3/line.png"/>
         <img class = "lexin_logo" src="images/float/3/logo.png"/>
       </div>
    </div>
  <div class="arrow-box">
     <img src="images/arrow_bottom.png" id="array">
  </div>
  <!-- <div class="swiper-pagination"></div>   -->
</div>

<script src="js/code.min.js"></script>
</body>
</html>
