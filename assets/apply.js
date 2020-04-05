var li1 = document.getElementById("li1");
var for_large = document.getElementById('for_large');
var foot = document.getElementById("foot").style.offsetHeight;
var head = document.getElementById("h");
var register = document.getElementById('register');
head.style.width = screen.width + "px";
var ht = head.offsetHeight;
var one = document.getElementById("Apply");
var two = document.getElementById("Home");
var three = document.getElementById("Team");
var four = document.getElementById("Menu");


var l = document.getElementById("top_left");
var r = document.getElementById("top_right");

function development()
{
    window.open("https://forms.gle/FeUAJDfk7owAwth47");
}
function product()
{
    window.open("https://forms.gle/vzsvp3sqi2SShJsAA");
}
function graphic()
{
    window.open("https://forms.gle/uby4NddxVmLD8eft5");
}
function market()
{
    window.open("https://forms.gle/bfA6BHVMPP4Y6y4d9");
}


var b1 = document.getElementById('back1');
var b2 = document.getElementById('back2');
var b3 = document.getElementById('back3');
var b4 = document.getElementById('back4');
var t = document.getElementById('t');
var t2 = document.getElementById('t2');

var j = 0;
function inc()
{
    j=j+1;
}
function dec()
{
    j=j-1;
}
var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
		if (isMobile && screen.width <= 730) {
            head.style.dislay="block";
            for_large.style.display = "none";
            t.style.display = "block";
            t2.style.display = "none";
            var bod = document.getElementById("bod");
            bod.style.height = screen.height + "px";
            bod.style.width = screen.width + "px";
            register.style.marginTop="10%";
            register.style.marginBottom = "20%";
            h2.style.fontSize  ="140px";
            h21.style.fontSize = "40px";
            t.style.paddingRight = "0px";
            l.style.padding = "0px";            l.style.width = screen.width + "px";l

         } else {var h2 = document.getElementById("h2");var h21 = document.getElementById("h21");
           h23.style.fontSize = "300%"; h21.style.fontSize = "310%";
            head.style.display = "none";
            for_large.style.display = "block";
            t2.style.display = "block";
            t.style.display ="none";
            li1.style.display = "none";
            var h4 = document.getElementById("h4");
            h4.style.fontSize = "300%";
            var h5  =document.getElementById("h5");
            h5.style.fontSize = "210%";
            l.style.marginRight = l.style.paddingRight = "0px";
            r.style.marginLeft = r.style.paddingLeft = "0px";
            l.style.textAlign = "center";
            r.style.textAlign = "left";

            l.style.marginRight="0%";
            l.style.paddingRight = "0%";
            r.style.paddingleft = "0%";
            r.style.marginRight = "0%";
            		}



 var i = 0;
function moveOut()
{   i = i+1;
  if(i==1){
    one.style.display = "block";  one.style.animationName = "topleft";
    two.style.display = "block"; two.style.animationName = "toleft";

    }
    else{
        i=0;
        one.style.display = "none";
        two.style.display="none";

    }
}
function change()
{
    one.style.top = "160px"; one.style.right = "125px";
    two.style.top = "215px"; two.style.right="100px";
    three.style.top="240px"; three.style.right="5px";

}
function disp()
{
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
}

var body = document.getElementByTagName("body");

body.width = screen.width + "px";