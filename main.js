//countdowndate timer
var coundowndate = new Date("nov 12, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = coundowndate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = "<c>" +days + "</c>" + "&nbsp;" + "<i>दिन,</i> " + "&nbsp;" + "<c>" + hours + "</c>" + "&nbsp;" + "<i>घन्टें ,</i>" + "&nbsp;" + "<c>" + minutes + "</c>" + "&nbsp;" + "<i>मिनट,</i>" + "&nbsp;" + "<c>" + seconds + "</c>" + "&nbsp;" + "<i> सैकेंड,</i>" + '&nbsp;' + "<c>"+"पहले"+"</c>";
  
  if (distance < 0) {
    document.getElementById('timer').innerHTML = "";
    clearInterval(x);
  }
}, 1000)

//after share name again in heading
var jqs = function(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
};

window.jqs = jqs;
var name = decodeURI(jqs("name"));
if (typeof jqs("name") === "undefined") {
  name = "";
}
var checkName = function() {
  if (name.length !== "") {
    name = name.replace("-", " ")
    h1.innerHTML = name;
    h2.innerHTML = name;
    h3.innerHTML = name;
    h4.innerHTML = name;
    h5.innerHTML = name;
    h6.innerHTML = name;
    document.getElementById('snow-fall').style = "height:100px;width:100%";
  } else {
    document.getElementById('snow-fall').style = "height:0;width:0";
  }
};

checkName();

//input name
function createGreeting() {
  var inpname = document.getElementById('inputname').value;
  var inputname = document.getElementById('inputname');
  var h1 = document.getElementById('h1');
  var h2 = document.getElementById('h2');
  var h3 = document.getElementById('h3');
  var h4 = document.getElementById('h4');
  var h5 = document.getElementById('h5');
  var h6 = document.getElementById('h6');

  h1.innerHTML = inpname;
  h2.innerHTML = inpname;
  h3.innerHTML = inpname;
  h4.innerHTML = inpname;
  h5.innerHTML = inpname;
  h6.innerHTML = inpname;
  if (inpname !== "") {
    document.getElementById('nameinput').style.display = "none";
    document.getElementById('sharebtn').style.display = "block";
    document.getElementById('marquee-kitrafse').innerHTML= h1.innerHTML + '&nbsp;'+ "की तरफ से आपको और आपके परिवार को ꧁*｡ﾟHappy Diwali｡ﾟ꧂";
  } else {
    alert("please enter your name");
  }
}
//addeventlistener
inputname.addEventListener('input', () => {
  h1.innerHTML = inputname.value;
})

//share on whatsaap
function sharewhatsapp() {
  var shareString = "";
  var whatsappHref;
  let sname = h1.innerHTML.replace(/ /g, '-');
  shareString += "*" + h1.innerHTML + "*";

  shareString += " ने *शुभ दीपावली का संदेश* आपके लिए भेजा है , देखने के लिए *नीचे जादुई Link* पर क्लिक करें%0A👇👇%0A"
  shareString += (window.location.href.split("?")[0] + "?name=" + h1.innerHTML).replace("#", "");
  whatsappHref = "whatsapp://send?text=" + shareString;
  window.location.href = whatsappHref;
};


var rope = document.getElementById("rope");
var leftCurtain = document.getElementById("leftcurtain");
var rightCurtain = document.querySelector(".rightcurtain");
var ropetext = document.querySelector('.perclickkar div');

rope.addEventListener("click", function() {
  rightCurtain.classList.add("slide-out-right");
  leftCurtain.classList.add("slide-out-left");
  rope.style.display = "none";
  ropetext.style.display = "none";
  audioyhg();
});

var defaultaudio = new Audio("https://drive.google.com/uc?export=download&id=12RIIMvqSPa3AcbxZSde9UXOcTTn7ArW2");
function audioyhg(){
  defaultaudio.play();
}

function selectsongs() {
  var audioselect = document.getElementById('selectsong');
  var audioplayfile = audioselect.options[audioselect.selectedIndex].value;
  var audioplayer = document.getElementById('audioplayer');
  audioplayer.src = audioplayfile;
  if (audioplayfile === "https://drive.google.com/uc?export=download&id=1L8XjqCVA1zetmW4kEFy7wxvtvRCNDWgs" || audioplayfile === "https://drive.google.com/uc?export=download&id=13Frbji8XHhf28ZGfzzpkH-ME2GhnRn0H") {
    defaultaudio.pause();
  }
  audioplayer.play();
}
