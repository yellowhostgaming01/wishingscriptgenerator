function createscript() {
  var eventtitle = document.getElementById('evtitle');
  var eventtitleerror = document.getElementById('evtitlerr');
  var evtdate = document.getElementById('evtdate');
  var evtdaterr = document.getElementById('evtdaterr');
  var kitarafseimg = document.querySelector('.kitarafseimg');
  var iskitarafseimg = document.getElementById('iskitarafseimg');
  var pgreetingtxt = document.getElementById('pgreetingtxt');
  var pgreetingtxterr = document.getElementById('pgreetingtxterr');
  var greetingtxt = document.getElementById('greetingtxt');
  var greetingtxterr = document.getElementById('greetingtxterr');
  var preview = document.getElementById('preview');
  var marqueeImages = document.querySelectorAll('.marquee-images img');
  var selectedImages = document.querySelectorAll('.marquee-images img.selected');

  /*check how many imgshayari uploaded*/
  var fileInputs = document.querySelectorAll('.img-shayari input[type="text"]');
  var hasUploadedImages = false;
  var selectedImage = document.querySelector('.theme-select-images img.selected');
  var themeimageindexbg = selectedImage ? selectedImage.getAttribute('index-bg') : '';
  var themeImageUrl = selectedImage ? selectedImage.getAttribute('src') : '';


  /* script logic */
  htmlcontent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sanatani powers</title>
</head>
<link rel="stylesheet" href="style.css">
<body>`;

  if (themeImageUrl) {
    htmlcontent += `
    <style>
    body{
      ${backgroundthemes[themeimageindexbg]}
      }
      
      @keyframes changing{
		0%{
			background-image: url("https://acegif.com/wp-content/gif/confetti-40.gif"),linear-gradient(70deg, #b6feb5, #ced5fc, #f7fab6, #ced5fc, #b6feb5);
			}
		50%{
			background-image: url("https://acegif.com/wp-content/gif/confetti-40.gif"),linear-gradient(70deg, #f7fab6, #ced5fc, #b6feb5, #ced5fc, #f7fab6);
			}
		100%{
			background-image: url("https://acegif.com/wp-content/gif/confetti-40.gif"),linear-gradient(70deg, #f7fab6, #ced5fc, #ced5fc, #f7fab6, #ced5fc);
			}
	}
      </style>`;
  }

  if (eventtitle.value == "") {
    eventtitle.classList.add('wrong');
    eventtitleerror.innerHTML = "Enter Event title";
    return false;
  } else {
    eventtitle.classList.add('right');
    eventtitle.classList.remove('wrong');
    eventtitleerror.innerHTML = "";
    htmlcontent += `
  <!-- top heading -->
  <center>
    <span style="color: #ff077a">༺♥༻
      <span style="color: #F400CA">${eventtitle.value}</span>
    ༺♥༻</span>
  </center>`;
  }

  /* Name border system */
  htmlcontent += `
<div class="snow-fall" id="snow-fall">
  <figure>
    <h1 id="h1" style="text-transform: uppercase">yhg indian</h1>
    <h1 id="h2" style="text-transform: uppercase">yhg indian</h1>
    <h1 id="h3" style="text-transform: uppercase">yhg indian</h1>
    <h1 id="h4" style="text-transform: uppercase">yhg indian</h1>
    <h1 id="h5" style="text-transform: uppercase">yhg indian</h1>
    <h1 id="h6" style="text-transform: uppercase">yhg indian</h1>
  </figure>
</div>`;

  if (iskitarafseimg.checked == true) {
    htmlcontent += `
  <!-- ki taraf se -->
  <center>
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtTVUWjzh27YaaZ76N063K05O0k8VJJeUEBShM1wPgw_aJrQF4Tqqa7BefDaT9kfrCgw84azS5yEbuLq5u1Ic-fAB4pCavbhgwIld5K4v4IpC9ttIT1X1CMXlq8HCGry9TmXM8P5B1WTb_Slym5hU-ROmZw0Zo8G1oBR7z8n7mDspcKu7h4WMI4q74ejo/s1300/ki%20aur%20se.png" alt="" width="300px">
  </center>`;
  }

  if (evtdate.value == "") {
    evtdaterr.innerHTML = "enter date";
    evtdate.classList.add('wrong');
    return false;
  } else {
    evtdate.classList.remove('wrong');
    evtdaterr.innerHTML = "";
    evtdate.classList.add('right');
    htmlcontent += `
  <!-- Festival Timer Design -->
  <div class="time-layout">
    <p id="timer" style="display: flex; justify-content: center;">dfgdfgdfhdf
    </p>
  </div><br>`;
  }

  /* marquee */
  // Marquee tag 1
  htmlcontent += `
<marquee behavior="scroll" direction="up" class="mup" scrolldelay="100">`;

  for (var i = 0; i <= 5; i++) {
    selectedImages.forEach(function(image) {
      htmlcontent += `
      <img src="${image.src}" alt="" width="32px">\n`;
    });
  }

  htmlcontent += `</marquee>`;

  // Marquee tag 2
  htmlcontent += `
<marquee behavior="scroll" direction="down" class="mdown" scrolldelay="100">`;
  for (var i = 0; i <= 5; i++) {
    selectedImages.forEach(function(image) {
      htmlcontent += `
        <img src="${image.src}" alt="" width="32px">\n`;
    });
  }
  htmlcontent += `</marquee>`;

  /* after date */
  if (greetingtxt.value == "") {
    greetingtxterr.innerHTML = "enter festival name";
    greetingtxt.classList.add('wrong');
    return false;
  } else if (greetingtxt.value < 2) {
    evtdaterr.innerHTML = "enter at least 3 words";
    greetingtxt.classList.add('wrong');
    return false;
  } else {
    evtdaterr.innerHTML = "";
    evtdate.classList.remove('wrong');
    evtdate.classList.add('right');
  }

  var imgUrls = [];
  var shayariTexts = [];

  function getRandomColor() {
    var colorgba = ['rgb(97, 51, 184)', 'rgb(51, 154, 184)', 'rgb(0, 255, 232)', 'rgb(255, 0, 57)', 'rgb(255, 0, 4)', 'rgb(255, 0, 176)', 'rgb(255, 0, 176)', 'rgb(146, 0, 255)', 'rgb(97, 51, 184)', 'rgb(51, 154, 184)', 'rgb(0, 255, 232)', 'rgb(255, 0, 57)', 'rgb(146, 0, 255)', 'rgb(97, 51, 184)', 'rgb(51, 154, 184)', 'rgb(0, 255, 232)', 'rgb(255, 0, 57)']
    var randomIndex = Math.floor(Math.random() * colorgba.length);
    // Return the color at the random index
    return colorgba[randomIndex];
  }

  fileInputs.forEach((input) => {
    if (input.value.trim() !== "") {
      imgUrls.push(input.value.trim());
      const shayariInput = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
      const shayariLines = shayariInput?.value?.trim().split('\n');
      const shayariText = shayariLines.map(line => `<p style="text-align: center;"><span style="background-color: ${getRandomColor()}; border-radius: 10px; color: #ffffff; font-size: 14pt; font-family: tahoma, arial, helvetica, sans-serif;">&nbsp;${line}&nbsp;</span></p>`).join('') || ""; // Use optional chaining
      shayariTexts.push(shayariText);
    }
  });

  /* Add image tags to HTML content */
  htmlcontent += `
  <center>`
  imgUrls.forEach((url, index) => {
    var selectedOption = document.getElementById(`option${index+1}`).value;

    htmlcontent += `
    <!--img ${index+1}-->
    <img src="${url}" width="314px" alt="made with Yhg wishing script creator" class='${selectedOption}'>\n`;

    if (shayariTexts[index] !== "" && shayariTexts[index] !== null && shayariTexts[index] !== undefined) {
      htmlcontent += `
      <div class="shayari-container">
        <p>${shayariTexts[index]}</p>
      </div>\n`;
    }
  });

  htmlcontent += `
  </center>`


  /*end body*/
  htmlcontent += `
  <center>
      <div class="footer-area">
        <div class="nameinput" id="nameinput">
          <input type="text" id="inputname" placeholder="यहाँ अपना नाम लिखें">
          <div id="goButton" onclick="createGreeting()">
            👉देखें
          </div>
        </div>
        <div class="sharebtn" id="sharebtn">
          <a class="footerbtn" href="javascript:void(0)" data-action="share/whatsapp/share" id="whatsapp" onclick="sharewhatsapp()">
            Created By <i>Naveen Ojha</i><b>(yhg)</b>
            <img width="22px" height="22px" src="https://1.bp.blogspot.com/-Pri4KuTHGKM/YOr1rlU4uSI/AAAAAAAAAHs/awHfMOzD_bgLF68I5o_vV9F6lCno8x01ACLcBGAsYHQ/w233-h233/wp.png" />Share
          </a>
        </div>
      </div>
    </center>
  </body>
  <script>
    //countdowndate timer
var coundowndate = new Date("${evtdate.value} 00:00:00").getTime();
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
h1.innerHTML = ${pgreetingtxt.value};
h2.innerHTML = ${pgreetingtxt.value};
h3.innerHTML = ${pgreetingtxt.value};
h4.innerHTML = ${pgreetingtxt.value};
h5.innerHTML = ${pgreetingtxt.value};
h6.innerHTML = ${pgreetingtxt.value};
var checkName = function() {
  if (name.length !== "") {
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

//share on whatsaap
function sharewhatsapp() {
  var shareString = "";
  var whatsappHref;
  shareString += "*" + h1.innerHTML + "*";

  shareString += " ने *शुभ दीपावली का संदेश* आपके लिए भेजा है , देखने के लिए *नीचे जादुई Link* पर क्लिक करें%0A👇👇%0A"
  shareString += (window.location.href.split("?")[0] + "?name=" + h1.innerHTML);
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
  </script>
  </html>`
  preview.innerText = htmlcontent;
}

function toggleImageSelection(event) {
  var image = event.target;
  image.classList.toggle('selected');
}

/* Add event listeners to images */
var marqueeImages = document.querySelectorAll('.marquee-images img');
marqueeImages.forEach(function(image) {
  image.addEventListener('click', toggleImageSelection);
});

document.addEventListener('DOMContentLoaded', () => {
  marqueeImages.forEach((img) => {
    img.addEventListener('click', () => {
      if (img.className == "selected") {}
    });
  });
});

/*button/btn*/
var copycode = document.getElementById('copycode');
var createscriptbtn = document.getElementById('createscript');
var resetbtn = document.getElementById('reset');
var previewd = document.getElementById('previewd');

/*Global variables*/
var htmlcontent;
var img, base64Img;

/*generate script*/
createscriptbtn.addEventListener('click', createscript);

/*preview*/
previewd.addEventListener('click', () => {
  document.documentElement.innerHTML = htmlcontent;
});

/*copy html content*/
copycode.addEventListener('click', () => {
  navigator.clipboard.writeText(htmlcontent);
  alert('Copy success');
})


/*how many images you wants*/
document.addEventListener('DOMContentLoaded',()=>{
  var hmiyw = document.getElementById('hmiyw');
  hmiyw.addEventListener('click', hmiywf);
})
function hmiywf() {
  var imgshayari = document.querySelector('.img-shayari');
  var btn = document.querySelector('.img-shayari button');
  var input = document.querySelector('.img-shayari input');
  var inputval = input.value;
  var classes = [
    'none',
    'zomin',
    'rubberband'
  ];

  if (input.value !== "") {
    imgshayari.innerHTML = "";
    input.classList.add('right');
    input.classList.remove('wrong');

    for (var i = 1; i <= inputval; i++) {
      var label = document.createElement('label');
      label.textContent = "img" + i;
      imgshayari.appendChild(label);
      imgshayari.appendChild(document.createElement('br'));

      var fileinput = document.createElement('input');
      fileinput.setAttribute('type', 'text');
      fileinput.setAttribute('id', `img${i}`);
      fileinput.setAttribute('placeholder', 'Enter your img url no.' + i);
      imgshayari.appendChild(fileinput);

      var img = document.createElement('img');
      img.setAttribute('class', 'shayariimg');
      imgshayari.appendChild(img);
      imgshayari.appendChild(document.createElement('br'));

      var select = document.createElement('select');
      select.setAttribute('id', `option${i}`);
      select.setAttribute('style', 'width:100%;padding:7px');
      classes.forEach(function(className) {
        var option = document.createElement('option');
        option.setAttribute('value', className);
        option.textContent = className;
        select.appendChild(option);
      });
      imgshayari.appendChild(select);
      imgshayari.appendChild(document.createElement('br'));

      var textarea = document.createElement('textarea');
      textarea.setAttribute('cols', '30');
      textarea.setAttribute('rows', '10');
      textarea.setAttribute('placeholder', 'Enter your Shayari no.' + i);
      imgshayari.appendChild(textarea);
      imgshayari.appendChild(document.createElement('br'));
    }
  } else {
    input.classList.add('wrong');
  }

  var inputsimgurl = document.querySelectorAll('.img-shayari input');
  inputsimgurl.forEach(function(input) {
    input.addEventListener('input', () => {
      var img = input.nextElementSibling;
      if (img && input.value) {
        img.style.display = "inline-block";
        img.src = input.value;
      } else {
        img.src = "";
        img.style.display = "";
      }
    });
  });
}


// Get the marquee label element
// var marqueeLabel = document.getElementById('marquee-label').querySelector('label');

// Get the f-images container
// var fImages = document.getElementById('f-images');

// Function to change the label text
// function changeLabelText() {
//     // Check if the user is in the f-images container
//     var isInFImages = fImages.contains(document.activeElement);

//     // Change the label text accordingly
//     if (isInFImages) {
//         marqueeLabel.textContent = "For Janamartami*";
//     } else {
//         marqueeLabel.textContent = "For 15aug || 26jan";
//     }
// }

// Listen for focus events on the document
// document.addEventListener('focusin', changeLabelText);

/*theme selection*/
function toggleImageSelection(event) {
  var image = event.target;
  var selectedImages = document.querySelectorAll('.theme-select-images img.selected');

  if (!image.classList.contains('selected')) {
    // Deselect all previously selected images
    selectedImages.forEach(function(img) {
      img.classList.remove('selected');
    });

    // Select the clicked image
    image.classList.add('selected');
  } else {
    // Deselect the clicked image
    image.classList.remove('selected');
  }
}

var themeImages = document.querySelectorAll('.theme-select-images img');
themeImages.forEach(function(img, index) {
  img.addEventListener('click', toggleImageSelection);
  img.setAttribute('index-bg', index + 1)
  img.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    var abc = document.querySelector('.img-preview-main');
    var abcd = document.getElementById('img-preview-theme-img');
    abc.style.display = "block";
    abcd.src = img.src;
  })
});

document.addEventListener('DOMContentLoaded', () => {
  themeImages.forEach((img) => {
    img.addEventListener('click', () => {
      if (img.className == "selected") {}
    });
  });
});


/*script*/
var backgroundthemes = ["", `
background: white;
max-width: 480px;
min-height: 200px;
margin: 0 auto;
text-align: center;
padding: 15px;
color: #999;
padding-bottom: 60px;
animation: changing 0.9s ease-in-out infinite alternate;
background-image: url("https://acegif.com/wp-content/gif/confetti-40.gif"), linear-gradient(70deg, #b6feb5, #ced5fc, #f7fab6, #ced5fc, #b6feb5);
box-shadow: 0 0 10px 1px rgba(0, 0, 0, .14), 0 1px 14px 2px rgba(0, 0, 0, .12), 0 0 5px -3px rgba(0, 0, 0, .3);`, `
background: white;
max-width: 480px;
min-height: 200px;
margin: 0 auto;
text-align: center;
padding: 15px;
color: #999;
padding-bottom: 60px;
animation: changing 0.9s ease-in-out infinite alternate;
background-image: url("http://www.animationsoftware7.com/img/agifs/leaf_fall_1.gif"),linear-gradient(90deg, #b6feb5, #ced5fc, #f7fab6, #ced5fc, #b6feb5);`, `
background: white;
max-width: 480px;
min-height: 200px;
margin: 0 auto;
text-align: center;
padding: 15px;
color: #999;
padding-bottom: 60px;
background-image: url(""),linear-gradient(1.2turn, #42befe, #e9e9e9, #a3fc8f, #42befe, #fcf76a);`, `
background: white;
max-width: 480px;
min-height: 200px;
margin: 0 auto;
text-align: center;
padding: 15px;
color: #999;
padding-bottom: 60px;
background-image: url("https://gifimage.net/wp-content/uploads/2018/06/transparent-falling-petals-gif-6.gif"),linear-gradient(0.25turn, #fcf089, #d5e4fe, #abfea1);`, `
background: white;
max-width: 480px;
min-height: 200px;
margin: 0 auto;
text-align: center;
padding: 15px;
color: #999;
padding-bottom: 60px;
background-image: url("https://i.gifer.com/origin/90/903eaa4724fdd3c35b9f372ef4fa4a7b_w200.gif"),linear-gradient(0.25turn, #fa7878, #fff, #fa7878);`];


/*theme preview div*/
document.addEventListener('DOMContentLoaded', () => {
  var abc = document.querySelector('.img-preview-main');
  var abcd = document.getElementById('close-theme-img');

  abcd.addEventListener('click', () => {
    abc.style.display = "none"
    var yhg = document.getElementById('theme-author-details');
    if (yhg) {
      yhg.remove()
    }
  })
})


/*select festival*/
document.addEventListener('DOMContentLoaded', () => {
  var selectBox = document.querySelector(".select-box");
  var selectOption = document.querySelector(".select-option");
  var soValue = document.querySelector("#soValue");
  var optionSearch = document.querySelector("#optionSearch");
  var option = document.querySelector(".options");
  var audioPlayer = document.querySelector("#audioPlayer");

  selectOption.addEventListener("click", function() {
    selectBox.classList.toggle('active');
  });

  var abc = document.querySelectorAll('#system li');

  abc.forEach(function(lie) {
    option.appendChild(lie);
  })

  option.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      var text = event.target.textContent;
      var value = event.target.getAttribute('value');
      soValue.value = text;
      selectBox.classList.remove('active');
    }
  })

  optionSearch.addEventListener('keyup', function() {
    var filter, li, i, textValue;
    filter = optionSearch.value.toUpperCase();
    li = option.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
      var liCount = li[i];
      textValue = liCount.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  })

})

/*certains images select*/
document.addEventListener('DOMContentLoaded',()=>{
  function toggleImageSelectioncertains(event) {
    var image = event.target;
    var selectedImages = document.querySelectorAll('.certain-select-images img.selected');
  
    if (!image.classList.contains('selected')) {
      // Deselect all previously selected images
      selectedImages.forEach(function(img) {
        img.classList.remove('selected');
      });
  
      // Select the clicked image
      image.classList.add('selected');
    } else {
      // Deselect the clicked image
      image.classList.remove('selected');
    }
  }
  
  var certainImages = document.querySelectorAll('.certain-select-images img');
  certainImages.forEach(function(img, index) {
    img.addEventListener('click', toggleImageSelectioncertains);
    img.setAttribute('index-bg', index + 1)
    img.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      var abc = document.querySelector('.img-preview-main');
      var abcd = document.getElementById('img-preview-theme-img'),
      div = document.createElement('div');
      div.id = "theme-author-details";
      
      abc.style.display = "block";
      abcd.src = img.src;
    })
  });
  certainImages.forEach((img) => {
    img.addEventListener('click', () => {
      if (img.className == "selected") {}
    });
  });
});
