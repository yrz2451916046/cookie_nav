// window.onload = function() {
//     function navSetAnima (){
//         // debugger;
//         $(".nav-main").find("a").on('click',function(){
//             $(this).addClass("active").siblings().removeClass("active");
//         })
//     }
//     $("header").load("./temp/head.html");
//     $("nav").load("./temp/nav.html",function(){navSetAnima()});
//     // $("footer").load("./temp/foot.html");
// }
$(function(){
    // function navSetAnima (){
    //     $(".nav-main").find("a").on('click',function(){
    //         var navhref = $(this).attr("href");
    //         setCookie('navhref',navhref);
    //         $(this).addClass("active").siblings().removeClass("active");
    //     })
    // }
    // function setCookie(c_name,value,expiredays){
    //     var exdate = new Date();
    //     exdate.setDate(exdate.getDate() + expiredays);
    //     document.cookie = c_name + "=" + escape(value) + 
    //         ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    // }
    // function getNavCookie(){
    //     var navCookie = document.cookie;
    //     navCookie = navCookie.split("navhref=")[1];
    //     navCookie = navCookie.split(";")[0];
    //     console.log(navCookie);
    //     switch(navCookie){
    //         case "index.html":
    //             $(".nav-main").find("a").eq(0).addClass("active").siblings().removeClass("active");
    //             break;
    //         case "project.html":
    //             $(".nav-main").find("a").eq(1).addClass("active").siblings().removeClass("active");
    //             break;
    //     }
    // }
    // $("header").load("./temp/head.html");
    // $("nav").load("./temp/nav.html",function(){navSetAnima();getNavCookie();});
    // $("footer").load("./temp/foot.html");
    function getPathname(){
        var winPath = window.location.pathname;
        switch(winPath){
            case "/index.html":
                $(".nav-main").find("a").eq(0).addClass("active").siblings().removeClass("active");
                break;
            case "/project.html":
                $(".nav-main").find("a").eq(1).addClass("active").siblings().removeClass("active");
                break;
        }
    }
    $("header").load("./temp/head.html");
    $("nav").load("./temp/nav.html",function(){getPathname();});
    // $("footer").load("./temp/foot.html");
})