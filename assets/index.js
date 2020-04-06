var team = document.getElementById('team');
team.style.width = screen.width;
var j1 = document.getElementById("top_heading");
var j2 = document.getElementById("second");
var j3 = document.getElementById("third");
var j4 = document.getElementById("contact");
var j5 = document.getElementById("anime");
var j9 = document.getElementById("anime1");
var j6 = document.getElementById("sixth");
var j7 = document.getElementById("foot");
var j8 = document.getElementById("Community");
var j10 = document.getElementById("contact1");
var nav = document.getElementById("navbarNavAltMarkup");
var hide  = document.getElementById("hide")
var after_hide = document.getElementById("after_hide");

var top_heading =  document.getElementById("top_heading");
var first = document.getElementById('main');
var second = document.getElementById('main_sub');
var top_heading_h1 = document.getElementById('top_heading_h1');

first.style.height = screen.height +'px';
first.style.width = screen.width + 'px';

second.style.height = screen.height + 'px';
second.style.width = screen.width + 'px';

var animation_panels = document.getElementsByClassName("second");
// console.log(animation_panels.length);
var i = 0;

var navbar = document.getElementById("nav").offsetHeight;
for( i =0;i<4;i++)
{
  var element_id = animation_panels[i].id;
  var element = document.getElementById(element_id);
  element.style.height = screen.height - navbar + "px";
  element.style.width = screen.width + "px";
  element.style.alignItems = "baseline";
}



var apply = document.getElementById("App");
var home = document.getElementById("Home");
var dev = document.getElementById('main_device');

var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
var isIpad  =/iPad/i.test(navigator.userAgent);

    if (isMobile && screen.width <= 730) {
      team.style.paddingLeft = "0.5%"; team.style.paddingRight = "0.5%";
      var up = screen.height - 180;
apply.style.bottom = up + "px";
top_heading.style.marginTop = "60%";
hide.style.display = "none";
after_hide.style.marginTop = "15%";
    }
    else if(isIpad)
    { top_heading.style.marginTop = "80%"; }
    else{  apply.style.bottom = "180px"; top_heading.style.marginTop = "40%"; top_heading_h1.style.fontSize = "300%";  nav.style.position="absolute"; nav.style.right = "9px";}


if(screen.width > screen.height + 100)
{
  dev.style.width = '40%';
  dev.style.left = '35%';
  var dis = 0.7*(screen.height);
  dev.style.top = dis+'px';
}
if(screen.height > screen.width)
{
  dev.style.width = '80%';
  dev.style.left = '10%';

  dev.style.top = ((screen.height)*70/100) + 'px';

}

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bodymovin'),
  path: 'clutter.json',
  renderer: 'svg',
  loop : 'true',
  autoplay: 'true',
  name:'clutter',
})
// var i;
// for(i = 0;i<front.length();i++)
// {
//   front[i].onclick(function(){ front[i].style.display = "none"; back[i].style.display = "block";});
// }

var as = document.getElementsByClassName("nav-item");

function my(){

if ($('#contact1').visible(true)) {
    as[0].classList.add("active");
} else {
    as[0].classList.remove("active");
}
}

upbtn = document.getElementById('up-btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbtn.style.display = "block";
  } else {
    upbtn.style.display = "none";
  }
}