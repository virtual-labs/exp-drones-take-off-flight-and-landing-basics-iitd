var i = 0;
var txt = 'Click on add button to add material.';
var speed = 50;

var marks=0;

function navNextstrt()

{
  document.getElementById("canvas_start").style.visibility="hidden";
  document.getElementById("canvas0").style.visibility="visible";

  dronefirstcome()
 
}

 

    function navNext2()

{
  document.getElementById("canvas0").style.visibility="hidden";
  document.getElementById("canvas2").style.visibility="visible";

  setTimeout(function()
  {
    var x= document.getElementById('aud_precautions');
        x.play();
   },1000);

  setTimeout(function()
  {

 $( "#highlighttxt3" ).delay(200).fadeIn(2000);
$( "#blkimg" ).delay(200).fadeIn(2000);

setTimeout(function()
  {
    var x= document.getElementById('pre3');
        x.play();
   },1000);


setTimeout(function()
  {
    document.getElementById("prelist3").style.visibility="visible";
    document.getElementById("prelist3").style.animation="precaution_come1 4s forwards"; 
    document.getElementById("highlighttxt3").style.visibility="hidden";
$( "#blkimg" ).delay(200).fadeOut(1000);
  },4500); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt2" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre2');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist2").style.visibility="visible";
      document.getElementById("prelist2").style.animation="precaution_come2 4s forwards"; 
      document.getElementById("highlighttxt2").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },6500);
  },9000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt1" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre1');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist1").style.visibility="visible";
      document.getElementById("prelist1").style.animation="precaution_come3 4s forwards"; 
      document.getElementById("highlighttxt1").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },4500);
  },18000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt4" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre4');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist4").style.visibility="visible";
      document.getElementById("prelist4").style.animation="precaution_come4 4s forwards"; 
      document.getElementById("highlighttxt4").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },5000);
  },27000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt5" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre5');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist5").style.visibility="visible";
      document.getElementById("prelist5").style.animation="precaution_come5 4s forwards"; 
      document.getElementById("highlighttxt5").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },4000);
  },36000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt6" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre6');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist6").style.visibility="visible";
      document.getElementById("prelist6").style.animation="precaution_come6 4s forwards"; 
      document.getElementById("highlighttxt6").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },4500);
  },45000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt7" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre7');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist7").style.visibility="visible";
      document.getElementById("prelist7").style.animation="precaution_come7 4s forwards"; 
      document.getElementById("highlighttxt7").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },6000);
  },55000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt8" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre8');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist8").style.visibility="visible";
      document.getElementById("prelist8").style.animation="precaution_come8 4s forwards"; 
      document.getElementById("highlighttxt8").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },4500);
  },64000);

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt9" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre9');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist9").style.visibility="visible";
      document.getElementById("prelist9").style.animation="precaution_come9 4s forwards"; 
      document.getElementById("highlighttxt9").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },4500);
  },73000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt10" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre10');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist10").style.visibility="visible";
      document.getElementById("prelist10").style.animation="precaution_come10 4s forwards"; 
      document.getElementById("highlighttxt10").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
    },4000);
  },82000); 

setTimeout(function()
  {
    document.getElementById("nextButton2").style.visibility="visible";
    document.getElementById("nextButton2_skp").style.visibility="hidden";

   },90000);

 },3000);

}
 

function navNext3()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 setTimeout(function()
              {

              var x= document.getElementById('aud_can3');
              x.play();

              },500);

}

function navNext3_skp()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

  setTimeout(function()
              {

              var x= document.getElementById('aud_can3');
              x.play();

              },500);
}


function dronefirstcome()

{

document.getElementById("drnfirt").style.animation="drnfirt_come 7s forwards linear";

setTimeout(function()
  {
    typeWriter()
    
 
    var x= document.getElementById('intro1');
        x.play();
   

  },7500);

setTimeout(function()
  {
    typeWriter2()
 
    var x= document.getElementById('intro2');
        x.play();
 
  },10000);

setTimeout(function()
  {
    typeWriter3()
 
    var x= document.getElementById('intro3');
        x.play();
  
  },12000);

setTimeout(function()
  {
    typeWriter4()
 
    var x= document.getElementById('intro4');
        x.play();
 
  },14500);

setTimeout(function()
  {
    typeWriter5()
 
    var x= document.getElementById('intro5');
        x.play();
 
  },16500);

setTimeout(function()
  {
    typeWriter6()
 
    var x= document.getElementById('intro6');
        x.play();

  },18500);

setTimeout(function()
  {
    typeWriter7()
 
    var x= document.getElementById('intro7');
        x.play();
 
  },20500);

setTimeout(function()
  {
    $( "#abttext" ).delay(200).fadeIn(2000);
  },22500);

setTimeout(function()
  {
    document.getElementById("arrowintro1").style.visibility="visible";
  },24000);

}


var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 unit';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 min.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feet';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilogram';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }

}





var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 units';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 mins.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feet';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilograms';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }
}


// =========================================CANVAS4==============================


function navNext4()

{
  document.getElementById("canvas3").style.visibility="hidden";
  document.getElementById("canvas4").style.visibility="visible";

  setTimeout(function()
  {
      $("#step4_1").slideDown("slow");

  },1000);

  // setTimeout(function()
  //     {

  //       var x= document.getElementById('aud_stp4_1');
  //       x.play();

  //     },1500);

  setTimeout(function()
  {
      document.getElementById("arowdwn4_1").style.visibility="visible";
      document.getElementById("arowdwn4_1").style.animation="arowdwn4_1shk 0.5s infinite";
      document.getElementById("tb_blindbtn").style.visibility="visible";

  },1500);

}



function blindbtnon()

{
  document.getElementById("arowdwn4_1").style.visibility="hidden";
  document.getElementById("tb_blindbtn").style.visibility="hidden";
  document.getElementById("hand1").style.visibility="visible";

  // setTimeout(function()
  // {
  //     $("#step4_2").slideDown("slow");

  // },500);

  // setTimeout(function()
  //     {

  //       var x= document.getElementById('aud_stp4_2');
  //       x.play();

  //     },1000);

 
      document.getElementById("arowdwn4_2").style.visibility="visible";
      document.getElementById("arowdwn4_2").style.animation="arowdwn4_1shk 0.5s infinite";
      document.getElementById("tb_transbtn").style.visibility="visible";

  
}

function transbtnon()

{
  document.getElementById("arowdwn4_2").style.visibility="hidden";
  document.getElementById("tb_transbtn").style.visibility="hidden";
  document.getElementById("step4_1").style.visibility="hidden";
  document.getElementById("hand2").style.visibility="visible";
  document.getElementById("hand2").style.animation="hand2_move 0.2s forwards";

  setTimeout(function()
  {
      document.getElementById("powerbutton").style.visibility="visible";
      document.getElementById("remotescreen").style.visibility="hidden";

  },200);

  setTimeout(function()
  {
      document.getElementById("blindingss1").style.visibility="hidden";
      document.getElementById("redlight").style.visibility="hidden";
      document.getElementById("redlight2").style.visibility="visible";
       $( "#hand1" ).fadeOut(1000);
       $( "#hand2" ).fadeOut(1000);
     
  },900);

  setTimeout(function()
  {
      $("#step4_3").slideDown("slow");
      document.getElementById("arowdwn4_3").style.visibility="visible";

  },2300);

  // setTimeout(function()
  //     {

  //       var x= document.getElementById('aud_stp4_3');
  //       x.play();

  //     },2800);

  setTimeout(function()
  {
  
      $( "#step4_3" ).fadeOut(1000);
      document.getElementById("arowdwn4_3").style.visibility="hidden";

  },9300);

  setTimeout(function()
  {
      $("#step4_4").slideDown("slow");
      
  },10300);

  // setTimeout(function()
  //     {

  //       var x= document.getElementById('aud_stp4_4');
  //       x.play();

  //     },10800);

  setTimeout(function()
      {

      document.getElementById("arowdwn4_2").style.visibility="visible";
      document.getElementById("tb_transbtn2").style.visibility="visible";

      },10800);
}

function transbtnoff()

{
  document.getElementById("arowdwn4_2").style.visibility="hidden";
  document.getElementById("tb_transbtn2").style.visibility="hidden";
  document.getElementById("step4_4").style.visibility="hidden";
  document.getElementById("hand3").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("hand3").style.animation="hand3_move 0.2s forwards";

  },200);
  

  setTimeout(function()
  {
      document.getElementById("powerbutton").style.visibility="hidden";
      document.getElementById("remotescreen").style.visibility="visible";

  },400);

  setTimeout(function()
  {
      $( "#hand3" ).fadeOut(1000);
     
  },900);

  setTimeout(function()
  {
     document.getElementById("nextButton4").style.visibility="visible";
     
  },2000);
}
// =========================================CANVAS4==============================

// =========================================CANVAS5==============================

function navNext5()

{
  document.getElementById("canvas4").style.visibility="hidden";
  document.getElementById("canvas5").style.visibility="visible";
  document.getElementById("mrk_01").innerHTML=marks;
}



function ansshw_c4() {

            if(document.getElementById('optionB').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionA").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("mrk_01").innerHTML=marks;
                document.getElementById("nextButton5").style.visibility="visible";
            }
            else if(document.getElementById('optionD').checked) {
              marks=1;
              document.getElementById("ans_can4").style.color="green";
              document.getElementById("mrk_01").innerHTML=marks;
              document.getElementById("got_mrkcan4").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk');
              x.play();

              },300);

              document.getElementById("ans_can4").innerHTML = document.getElementById("optionB").value;
              document.getElementById("showans").style.display="none";
              document.getElementById("nextButton5").style.visibility="visible";

              }

            else if(document.getElementById('optionC').checked) {
             
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionC").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton5").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else if(document.getElementById('optionA').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionD").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton5").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can4").innerHTML = "Select Option";
            }
        }

// =========================================CANVAS5==============================

// =========================================CANVAS6==============================

function navNext6()

{
  document.getElementById("canvas5").style.visibility="hidden";
  document.getElementById("canvas6").style.visibility="visible";
}

// =========================================CANVAS6==============================

// =========================================CANVAS7==============================

function navNext7()

{
  document.getElementById("canvas6").style.visibility="hidden";
  document.getElementById("canvas7").style.visibility="visible";

  document.getElementById("svg_can3").style.visibility="visible";
  document.getElementById("handle1_can3").style.visibility="visible";

  setTimeout(function()
  {
      $("#step7_2").slideDown("slow");

  },1000);

  setTimeout(function()
  {
      document.getElementById("arowdwn7_2").style.visibility="visible";
      document.getElementById("arowdwn7_3").style.visibility="visible";
      document.getElementById("arowdwn7_2").style.animation="arowdwn7_2shk 0.5s infinite";
      document.getElementById("tb_handle1_can3").style.visibility="hidden";
      document.getElementById("handle1_div_can3").style.visibility="visible";
      document.getElementById("handle1_div_can3").style.height="62px";
      document.getElementById("handle1_div_can3").style.width="134px";

  },2000);

}


function transbtnon_can7()

{
  document.getElementById("arowdwn7_1").style.visibility="hidden";
  document.getElementById("tb_transbtn_can7").style.visibility="hidden";
  document.getElementById("step7_1").style.visibility="hidden";
  document.getElementById("hand3_can7").style.visibility="visible";

  setTimeout(function()
  {

  document.getElementById("hand3_can7").style.animation="hand3_can7_move 0.2s forwards";

  },200);
  
  setTimeout(function()
  {
    document.getElementById("powerbutton_can7").style.visibility="visible";
    document.getElementById("remotescreen_can7").style.visibility="hidden";

  },400);

  setTimeout(function()
  {
      $( "#hand3_can7" ).fadeOut(1000);
     
  },1000);

  setTimeout(function()
  {
      $( "#zoomled" ).fadeIn(1000);
     
  },2000);

  setTimeout(function()
  {
      $("#step7_3").slideDown("slow");
     
  },3000);

  setTimeout(function()
  {
      document.getElementById("tb_gps1").style.visibility="visible";
      document.getElementById("arowdwn7_4").style.visibility="visible";
      document.getElementById("arowdwn7_4").style.animation="arowdwn7_4shk 0.5s infinite";
      document.getElementById("one").style.visibility="visible";
     
  },3500);

}


function transbtnoff_can7()

{
  document.getElementById("arowdwn7_1").style.visibility="hidden";
  document.getElementById("tb_transbtn2_can7").style.visibility="hidden";
  document.getElementById("step7_11").style.visibility="hidden";
  document.getElementById("hand32_can7").style.visibility="visible";

  setTimeout(function()
  {

  document.getElementById("hand32_can7").style.animation="hand32_can7_move 0.2s forwards";

  },200);
  
  setTimeout(function()
  {
    document.getElementById("powerbutton_can7").style.visibility="hidden";
    document.getElementById("remotescreen_can7").style.visibility="visible";

  },400);

  setTimeout(function()
  {
      $( "#hand32_can7" ).fadeOut(1000);
     
  },1000);

  setTimeout(function()
  {
      document.getElementById("nextButton7").style.visibility="visible";

  },2000);

}


var targets3_1 = $("#handle1_div_can3");
var bezierWeight5 = 0.675;

var handles_can3 = document.querySelectorAll(".handle_can3");
var path_can3 = document.querySelector(".path_can3");

TweenLite.set(handles_can3[0], { x: 430, y: 252 });
TweenLite.set(handles_can3[1], { x: 365, y: 247 });

Draggable.create(handles_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can3[0]._gsTransform.x;
  var y1 = handles_can3[0]._gsTransform.y;
  
  var x4 = handles_can3[1]._gsTransform.x;
  var y4 = handles_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can3.setAttribute("d", data);
   document.getElementById("blackwire").style.visibility="hidden";
   document.getElementById("arowdwn7_2").style.visibility="hidden";
   document.getElementById("step7_2").style.visibility="hidden";
   
  for(var i=0; i<targets3_1.length;i++)

  {
    if (this.hitTest(targets3_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can3").style.visibility="hidden";
document.getElementById("handle1_div_can3").style.height="0px";
document.getElementById("handle1_div_can3").style.width="0px";

document.getElementById("svg_can3").style.visibility="hidden";
document.getElementById("handle1_can3").style.visibility="hidden";
document.getElementById("arowdwn7_3").style.visibility="hidden";

document.getElementById("pmupin3").style.visibility="visible";
document.getElementById("zoomwire2").style.visibility="visible";

setTimeout(function()
  {
      $( "#zoomledwire" ).fadeOut(1000);
      $( "#pmupin3" ).fadeOut(1000);
      $( "#zoomwire2" ).fadeOut(1000);
      $( "#zoomwire1" ).fadeOut(1000);
     
  },1500);

 setTimeout(function()
  {
      $("#step7_1").slideDown("slow");

  },2500);

  setTimeout(function()
  {
      document.getElementById("arowdwn7_1").style.visibility="visible";
      document.getElementById("arowdwn7_1").style.animation="arowdwn7_1shk 0.5s infinite";
      document.getElementById("tb_transbtn_can7").style.visibility="visible";

  },3500);

    }
  }
}
  
});

function gps1()
{
    document.getElementById("tb_gps1").style.visibility="hidden";
    document.getElementById("arowdwn7_4").style.visibility="hidden";
    document.getElementById("step7_3").style.visibility="hidden";

    document.getElementById("one").style.visibility="hidden";
    document.getElementById("two").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="visible";
    document.getElementById("remoteup").style.visibility="visible";

    document.getElementById("tb_gps2").style.visibility="visible";
}

function gps2()
{
    document.getElementById("tb_gps2").style.visibility="hidden";
    
    document.getElementById("two").style.visibility="hidden";
    document.getElementById("three").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="hidden";
    document.getElementById("remoteup").style.visibility="hidden";

    document.getElementById("tb_gps3").style.visibility="visible";
}

function gps3()
{
    document.getElementById("tb_gps3").style.visibility="hidden";
    
    document.getElementById("three").style.visibility="hidden";
    document.getElementById("four").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="visible";
    document.getElementById("remoteup").style.visibility="visible";

    document.getElementById("tb_gps4").style.visibility="visible";
}

function gps4()
{
    document.getElementById("tb_gps4").style.visibility="hidden";
    
    document.getElementById("four").style.visibility="hidden";
    document.getElementById("five").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="hidden";
    document.getElementById("remoteup").style.visibility="hidden";

    document.getElementById("tb_gps5").style.visibility="visible";
}

function gps5()
{
    document.getElementById("tb_gps5").style.visibility="hidden";
    
    document.getElementById("five").style.visibility="hidden";
    document.getElementById("six").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="visible";
    document.getElementById("remoteup").style.visibility="visible";

    document.getElementById("tb_gps6").style.visibility="visible";
}

function gps6()
{
    document.getElementById("tb_gps6").style.visibility="hidden";
    
    document.getElementById("six").style.visibility="hidden";
    document.getElementById("seven").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="hidden";
    document.getElementById("remoteup").style.visibility="hidden";

    document.getElementById("tb_gps7").style.visibility="visible";
}

function gps7()
{
    document.getElementById("tb_gps7").style.visibility="hidden";
    
    document.getElementById("seven").style.visibility="hidden";
    document.getElementById("eight").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="visible";
    document.getElementById("remoteup").style.visibility="visible";

    document.getElementById("tb_gps8").style.visibility="visible";
}

function gps8()
{
    document.getElementById("tb_gps8").style.visibility="hidden";
    
    document.getElementById("eight").style.visibility="hidden";
    document.getElementById("nine").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="hidden";
    document.getElementById("remoteup").style.visibility="hidden";

    document.getElementById("tb_gps9").style.visibility="visible";
}

function gps9()
{
    document.getElementById("tb_gps9").style.visibility="hidden";
    
    document.getElementById("nine").style.visibility="hidden";
    document.getElementById("ten").style.visibility="visible";

    document.getElementById("remotebutton").style.visibility="visible";
    document.getElementById("remoteup").style.visibility="visible";

    document.getElementById("tb_gps10").style.visibility="visible";
}

function gps10()
{
    document.getElementById("tb_gps10").style.visibility="hidden";
    
    document.getElementById("ten").style.visibility="hidden";

    document.getElementById("remotebutton").style.visibility="hidden";
    document.getElementById("remoteup").style.visibility="hidden";

    document.getElementById("yellowlight").style.visibility="visible";

    setTimeout(function()
  {
      $("#step7_4").slideDown("slow");

  },500);

  setTimeout(function()
  {
      document.getElementById("arowdwn7_5").style.visibility="visible";
      
  },900);

  setTimeout(function()
  {
     $( "#step7_4" ).fadeOut(1000);
     
  },6000);

  setTimeout(function()
  {
     document.getElementById("arowdwn7_5").style.visibility="hidden";
     
  },6500);

  setTimeout(function()
  {
      $("#step7_5").slideDown("slow");

  },7500);

  setTimeout(function()
  {
     document.getElementById("arowdwn7_6").style.visibility="visible";
     document.getElementById("tb_dronhori").style.visibility="visible";
     document.getElementById("arowdwn7_6").style.animation="arowdwn7_6shk 0.5s infinite";
     
  },8000);
}


function rotate_hori()
{
    document.getElementById("arowdwn7_6").style.visibility="hidden";
    document.getElementById("tb_dronhori").style.visibility="hidden";
    document.getElementById("step7_5").style.visibility="hidden";
    document.getElementById("fullfinalshw_can7").style.visibility="hidden";
    document.getElementById("fullfinal_can7").style.visibility="visible";
    document.getElementById("fullfinal_can7").style.animation="fullfinal_roho 4s linear";

    setTimeout(function()
  {

   document.getElementById("greenlight").style.visibility="visible";
   document.getElementById("yellowlight").style.visibility="hidden";

   document.getElementById("fullfinal_can7").style.visibility="hidden";
   document.getElementById("fullfinalshw_can7").style.visibility="visible";

  },4000);

    setTimeout(function()
  {
      $("#step7_6").slideDown("slow");

  },4500);

    setTimeout(function()
  {
      document.getElementById("arowdwn7_5").style.visibility="visible";
      
  },4900);

    setTimeout(function()
  {
     $( "#step7_6" ).fadeOut(1000);
     
  },9600);

  setTimeout(function()
  {
     document.getElementById("arowdwn7_5").style.visibility="hidden";
     
  },10000);

  setTimeout(function()
  {
      $("#step7_7").slideDown("slow");

  },11000);

  setTimeout(function()
  {
     document.getElementById("arowdwn7_6").style.visibility="visible";
     document.getElementById("tb_dronverti").style.visibility="visible";
     document.getElementById("arowdwn7_6").style.animation="arowdwn7_6shk 0.5s infinite";
     
  },11500);
}


function rotate_verti()
{
    document.getElementById("arowdwn7_6").style.visibility="hidden";
    document.getElementById("tb_dronverti").style.visibility="hidden";
    document.getElementById("step7_7").style.visibility="hidden";

    document.getElementById("fullfinalshw_can7").style.visibility="hidden";
    document.getElementById("fullfinal2_can7").style.visibility="visible";
    document.getElementById("fullfinal2_can7").style.animation="fullfinal_rover 1.2s linear";

    setTimeout(function()
  {
     document.getElementById("fullfinal2_can7").style.visibility="hidden";
     document.getElementById("fullfinal_back").style.visibility="visible"; 
     document.getElementById("fullfinal_back").style.animation="fullfinal_rover2 1.2s linear"; 

  },1200);

    setTimeout(function()
  {
      
     document.getElementById("fullfinal_back").style.animation="fullfinal_rover3 1.2s linear"; 

  },2400);

    setTimeout(function()
  {
     document.getElementById("fullfinal2_can7").style.visibility="visible";
     document.getElementById("fullfinal_back").style.visibility="hidden"; 
     document.getElementById("fullfinal2_can7").style.animation="fullfinal_rover4 1.2s linear"; 

  },3600);

    setTimeout(function()
  {
      
     document.getElementById("greenlight").style.visibility="hidden";
     document.getElementById("greenlight2").style.visibility="visible";

     document.getElementById("fullfinal2_can7").style.visibility="hidden";
     document.getElementById("fullfinalshw_can7").style.visibility="visible";

  },4800);

    setTimeout(function()
  {
      $("#step7_11").slideDown("slow");

  },5200);

  setTimeout(function()
  {
      document.getElementById("arowdwn7_1").style.visibility="visible";
      document.getElementById("tb_transbtn2_can7").style.visibility="visible";

  },5700);
}
// =========================================CANVAS7==============================


// =========================================CANVAS8==============================

function navNext8()

{
  document.getElementById("canvas7").style.visibility="hidden";
  document.getElementById("canvas8").style.visibility="visible";
  document.getElementById("mrk_02").innerHTML=marks;
}


function ansshw_c8() {

            if(document.getElementById('optionD2').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionA2").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("mrk_02").innerHTML=marks;
                document.getElementById("nextButton8").style.visibility="visible";
            }
            else if(document.getElementById('optionB2').checked) {
              marks=marks+1;
              document.getElementById("ans_can8").style.color="green";
              document.getElementById("mrk_02").innerHTML=marks;
              document.getElementById("got_mrkcan8").style.visibility="visible";

              document.getElementById("ans_can8").innerHTML = document.getElementById("optionB2").value;
              document.getElementById("showans_can8").style.display="none";
              document.getElementById("nextButton8").style.visibility="visible";

              }

            else if(document.getElementById('optionC2').checked) {
             
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionC2").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;
            }
            else if(document.getElementById('optionA2').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionA2").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can8").innerHTML = "Select Option";
            }
        }


// =========================================CANVAS8==============================


// =========================================CANVAS9==============================

function navNext9()

{
  document.getElementById("canvas8").style.visibility="hidden";
  document.getElementById("canvas9").style.visibility="visible";
}
// =========================================CANVAS9==============================

// =========================================CANVAS10==============================

function navNext10()

{
  document.getElementById("canvas9").style.visibility="hidden";
  document.getElementById("canvas10").style.visibility="visible";

  setTimeout(function()
  {
      $("#step10_0").slideDown("slow");

  },500);

  setTimeout(function()
  {
      document.getElementById("arowdwn10_0").style.visibility="visible";
      document.getElementById("arowdwn10_0").style.animation="arowdwn10_0shk 0.5s infinite";
      document.getElementById("tb_transzoom_can10").style.visibility="visible";

  },1000);

}

function transzoom_can10()

{
  document.getElementById("arowdwn10_0").style.visibility="hidden";
  document.getElementById("tb_transzoom_can10").style.visibility="hidden";
  document.getElementById("step10_0").style.visibility="hidden";

  document.getElementById("remotezoom").style.visibility="visible";
  document.getElementById("remotescreen_can10").style.visibility="visible";

  document.getElementById("okbt").style.visibility="visible";
  document.getElementById("cancelbt").style.visibility="visible";
  document.getElementById("downbt").style.visibility="visible";
  document.getElementById("upbt").style.visibility="visible";

  document.getElementById("set1").style.visibility="visible";
  document.getElementById("set2").style.visibility="visible";
  document.getElementById("set3").style.visibility="visible";
  document.getElementById("set4").style.visibility="visible";
  document.getElementById("set5").style.visibility="visible";
  document.getElementById("set6").style.visibility="visible";
  document.getElementById("set7").style.visibility="visible";
  document.getElementById("set8").style.visibility="visible";
  document.getElementById("set9").style.visibility="visible";
  document.getElementById("set10").style.visibility="visible";

  document.getElementById("set11").style.visibility="visible";
  document.getElementById("set12").style.visibility="visible";
  document.getElementById("set13").style.visibility="visible";
  document.getElementById("set14").style.visibility="visible";
  document.getElementById("set15").style.visibility="visible";
  document.getElementById("set16").style.visibility="visible";
  document.getElementById("set17").style.visibility="visible";
  document.getElementById("set18").style.visibility="visible";
  document.getElementById("set19").style.visibility="visible";
  document.getElementById("set20").style.visibility="visible";

  document.getElementById("set21").style.visibility="visible";
  document.getElementById("set22").style.visibility="visible";
  document.getElementById("set23").style.visibility="visible";
  document.getElementById("set24").style.visibility="visible";
  document.getElementById("set25").style.visibility="visible";
  document.getElementById("set26").style.visibility="visible";
  document.getElementById("set27").style.visibility="visible";
  document.getElementById("set47").style.visibility="visible";
  
  setTimeout(function()
  {
      $("#step10_1").slideDown("slow");

  },500);

  setTimeout(function()
  {
      document.getElementById("arowdwn10_1").style.visibility="visible";
      document.getElementById("arowdwn10_1").style.animation="arowdwn10_1shk 0.5s infinite";
      document.getElementById("tb_transbtn_can10").style.visibility="visible";

  },1000);

}


function transbtnon_can10()

{
  document.getElementById("arowdwn10_1").style.visibility="hidden";
  document.getElementById("tb_transbtn_can10").style.visibility="hidden";
  document.getElementById("step10_1").style.visibility="hidden";
  document.getElementById("hand2_can10").style.visibility="visible";
  
  setTimeout(function()
  {
      document.getElementById("hand2_can10").style.animation="hand2_move_can10 0.2s forwards";

  },300);

  setTimeout(function()
  {
      document.getElementById("powerbutton_can10").style.visibility="visible";
      document.getElementById("remotescreen_can10").style.visibility="hidden";

  },500);

  setTimeout(function()
  {
      $( "#hand2_can10" ).fadeOut(1000);
     
  },1200);

  setTimeout(function()
  {
      $("#step10_2").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("arowdwn10_2").style.animation="arowdwn10_2shk 0.5s infinite";
      document.getElementById("tb_ok").style.visibility="visible";

      },3000);
}


function ok()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok").style.visibility="hidden";
  document.getElementById("step10_2").style.visibility="hidden";
  document.getElementById("handfinger").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set1").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_3").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok2").style.visibility="visible";

      },3000);
}

function ok2()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok2").style.visibility="hidden";
  document.getElementById("step10_3").style.visibility="hidden";
  document.getElementById("set2").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_4").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok3").style.visibility="visible";

      },1000);
}

function ok3()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok3").style.visibility="hidden";
  document.getElementById("step10_4").style.visibility="hidden";
  document.getElementById("set3").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_5").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("arowdwn10_3").style.animation="arowdwn10_2shk 0.5s infinite";
      document.getElementById("tb_cancle").style.visibility="visible";

      },1000);
}

function cancle()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle").style.visibility="hidden";
  document.getElementById("step10_5").style.visibility="hidden";
  document.getElementById("handfinger2").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set4").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger2" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_6").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.animation="arowdwn10_4shk 0.5s infinite";

      },3000);
 
}


function dwn()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn").style.visibility="hidden";
  document.getElementById("step10_6").style.visibility="hidden";
  document.getElementById("set5").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_7").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok4").style.visibility="visible";

      },1000);
}

function ok4()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok4").style.visibility="hidden";
  document.getElementById("step10_7").style.visibility="hidden";
  document.getElementById("set6").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_8").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_5").style.visibility="visible";
      document.getElementById("arowdwn10_5").style.animation="arowdwn10_4shk 0.5s infinite";
      document.getElementById("tb_up").style.visibility="visible";

      },1000);
}

function up()

{
  document.getElementById("arowdwn10_5").style.visibility="hidden";
  document.getElementById("tb_up").style.visibility="hidden";
  document.getElementById("set7").style.visibility="hidden";

  setTimeout(function()
  {
      document.getElementById("arowdwn10_5").style.visibility="visible";
      document.getElementById("tb_up2").style.visibility="visible";

  },300);

}

function up2()

{
  document.getElementById("arowdwn10_5").style.visibility="hidden";
  document.getElementById("tb_up2").style.visibility="hidden";
  document.getElementById("set8").style.visibility="hidden";

  setTimeout(function()
  {
      document.getElementById("arowdwn10_5").style.visibility="visible";
      document.getElementById("tb_up3").style.visibility="visible";

  },300);

}

function up3()

{
  document.getElementById("arowdwn10_5").style.visibility="hidden";
  document.getElementById("tb_up3").style.visibility="hidden";
  document.getElementById("set9").style.visibility="hidden";

  setTimeout(function()
  {
      document.getElementById("arowdwn10_5").style.visibility="visible";
      document.getElementById("tb_up4").style.visibility="visible";

  },300);

}

function up4()

{
  document.getElementById("arowdwn10_5").style.visibility="hidden";
  document.getElementById("tb_up4").style.visibility="hidden";
  document.getElementById("set10").style.visibility="hidden";

  document.getElementById("step10_8").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_9").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle2").style.visibility="visible";

      },1000);

}

function cancle2()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle2").style.visibility="hidden";
  document.getElementById("step10_9").style.visibility="hidden";
  document.getElementById("handfinger3").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set11").style.visibility="hidden";
      document.getElementById("set6").style.visibility="visible";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger3" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_10").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn2").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn2()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn2").style.visibility="hidden";
  document.getElementById("step10_10").style.visibility="hidden";
  document.getElementById("set6").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_11").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok5").style.visibility="visible";

      },1000);
}

function ok5()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok5").style.visibility="hidden";
  document.getElementById("step10_11").style.visibility="hidden";
  document.getElementById("set12").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_12").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn3").style.visibility="visible";

      },1000);
}

function dwn3()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn3").style.visibility="hidden";
  document.getElementById("step10_12").style.visibility="hidden";
  document.getElementById("set13").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_13").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle3").style.visibility="visible";

      },1000);
}

function cancle3()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle3").style.visibility="hidden";
  document.getElementById("step10_13").style.visibility="hidden";
  document.getElementById("handfinger4").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set14").style.visibility="hidden";
      document.getElementById("set12").style.visibility="visible";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger4" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_14").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn4").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn4()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn4").style.visibility="hidden";
  document.getElementById("set12").style.visibility="hidden";

  document.getElementById("arowdwn10_4").style.visibility="visible";
  document.getElementById("tb_dwn5").style.visibility="visible";

}

function dwn5()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn5").style.visibility="hidden";
  // document.getElementById("step10_15").style.visibility="hidden";
  document.getElementById("set15").style.visibility="hidden";

  // setTimeout(function()
  // {
  //     $("#step10_16").slideDown("slow");

  // },500);

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn6").style.visibility="visible";

}

function dwn6()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn6").style.visibility="hidden";
  document.getElementById("step10_14").style.visibility="hidden";
  document.getElementById("set16").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_17").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok6").style.visibility="visible";

      },1000);
}


function ok6()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok6").style.visibility="hidden";
  document.getElementById("step10_17").style.visibility="hidden";
  document.getElementById("set17").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_18").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok7").style.visibility="visible";

      },1000);
}

function ok7()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok7").style.visibility="hidden";
  document.getElementById("step10_18").style.visibility="hidden";
  document.getElementById("set18").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_19").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn7").style.visibility="visible";

      },1000);
}

function dwn7()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn7").style.visibility="hidden";
  document.getElementById("step10_19").style.visibility="hidden";
  document.getElementById("set19").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_20").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle4").style.visibility="visible";

      },1000);
}

function cancle4()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle4").style.visibility="hidden";
  document.getElementById("step10_20").style.visibility="hidden";
  document.getElementById("handfinger5").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set20").style.visibility="hidden";
      document.getElementById("set18").style.visibility="visible";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger5" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_21").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn8").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn8()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn8").style.visibility="hidden";
  // document.getElementById("step10_21").style.visibility="hidden";
  document.getElementById("set18").style.visibility="hidden";

  // setTimeout(function()
  // {
  //     $("#step10_22").slideDown("slow");

  // },500);

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn9").style.visibility="visible";

}

function dwn9()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn9").style.visibility="hidden";
  // document.getElementById("step10_22").style.visibility="hidden";
  document.getElementById("set21").style.visibility="hidden";

  // setTimeout(function()
  // {
  //     $("#step10_23").slideDown("slow");

  // },500);

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn10").style.visibility="visible";

}

function dwn10()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn10").style.visibility="hidden";
  document.getElementById("step10_21").style.visibility="hidden";
  document.getElementById("set22").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_24").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok8").style.visibility="visible";

      },1000);
}

function ok8()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok8").style.visibility="hidden";
  document.getElementById("step10_24").style.visibility="hidden";
  document.getElementById("set23").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_25").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok9").style.visibility="visible";

      },1000);
}

function ok9()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok9").style.visibility="hidden";
  document.getElementById("step10_25").style.visibility="hidden";
  document.getElementById("set24").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_26").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn11").style.visibility="visible";

      },1000);
}

function dwn11()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn11").style.visibility="hidden";
  document.getElementById("step10_26").style.visibility="hidden";
  document.getElementById("set25").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_27").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle5").style.visibility="visible";

      },1000);
}

function cancle5()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle5").style.visibility="hidden";
  document.getElementById("step10_27").style.visibility="hidden";
  document.getElementById("handfinger6").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set26").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger6" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_28").slideDown("slow");

  },2500);

  setTimeout(function()
  {
      document.getElementById("set27").style.visibility="hidden";
      // document.getElementById("set47").style.visibility="visible";

  },4000);

  setTimeout(function()
  {

      $( "#step10_28" ).fadeOut(1000);
     
  },7000);

  setTimeout(function()
  {

      $( "#step10_48" ).slideDown("slow");
     
  },7000);

  setTimeout(function()
      {

      document.getElementById("tb_cancle11").style.visibility="visible";
      document.getElementById("arowdwn10_3").style.visibility="visible";

      },7500);

  // setTimeout(function()
  //     {

  //     document.getElementById("tb_dwn12").style.visibility="visible";
  //     document.getElementById("arowdwn10_4").style.visibility="visible";

  //     },3000);
 
}

function dwn12()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn12").style.visibility="hidden";
  document.getElementById("step10_28").style.visibility="hidden";
  document.getElementById("set27").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_29").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok10").style.visibility="visible";

      },1000);
}

function ok10()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok10").style.visibility="hidden";
  document.getElementById("step10_29").style.visibility="hidden";
  document.getElementById("set28").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_30").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn13").style.visibility="visible";

      },1000);
}

function dwn13()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn13").style.visibility="hidden";
  document.getElementById("step10_30").style.visibility="hidden";
  document.getElementById("set29").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_31").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle6").style.visibility="visible";

      },1000);
}

function cancle6()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle6").style.visibility="hidden";
  document.getElementById("step10_31").style.visibility="hidden";
  document.getElementById("handfinger7").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set30").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger7" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_32").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn14").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn14()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn14").style.visibility="hidden";
  document.getElementById("step10_32").style.visibility="hidden";
  document.getElementById("set31").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_33").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok11").style.visibility="visible";

      },1000);
}


function ok11()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok11").style.visibility="hidden";
  document.getElementById("step10_33").style.visibility="hidden";
  document.getElementById("set32").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_34").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn15").style.visibility="visible";

      },1000);
}

function dwn15()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn15").style.visibility="hidden";
  document.getElementById("step10_34").style.visibility="hidden";
  document.getElementById("set33").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_35").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle7").style.visibility="visible";

      },1000);
}

function cancle7()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle7").style.visibility="hidden";
  document.getElementById("step10_35").style.visibility="hidden";
  document.getElementById("handfinger8").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set34").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger8" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_36").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn16").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn16()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn16").style.visibility="hidden";
  document.getElementById("step10_36").style.visibility="hidden";
  document.getElementById("set35").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_37").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok12").style.visibility="visible";

      },1000);
}

function ok12()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok12").style.visibility="hidden";
  document.getElementById("step10_37").style.visibility="hidden";
  document.getElementById("set36").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_38").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn17").style.visibility="visible";

      },1000);
}

function dwn17()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn17").style.visibility="hidden";
  document.getElementById("step10_38").style.visibility="hidden";
  document.getElementById("set37").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_39").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle8").style.visibility="visible";

      },1000);
}

function cancle8()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle8").style.visibility="hidden";
  document.getElementById("step10_39").style.visibility="hidden";
  document.getElementById("handfinger9").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set38").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger9" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_40").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn18").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn18()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn18").style.visibility="hidden";
  document.getElementById("step10_40").style.visibility="hidden";
  document.getElementById("set39").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_41").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok13").style.visibility="visible";

      },1000);
}

function ok13()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok13").style.visibility="hidden";
  document.getElementById("step10_41").style.visibility="hidden";
  document.getElementById("set40").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_42").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn19").style.visibility="visible";

      },1000);
}


function dwn19()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn19").style.visibility="hidden";
  document.getElementById("step10_42").style.visibility="hidden";
  document.getElementById("set41").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_43").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle9").style.visibility="visible";

      },1000);
}

function cancle9()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle9").style.visibility="hidden";
  document.getElementById("step10_43").style.visibility="hidden";
  document.getElementById("handfinger10").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set42").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger10" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_44").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_dwn20").style.visibility="visible";
      document.getElementById("arowdwn10_4").style.visibility="visible";

      },3000);
 
}

function dwn20()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn20").style.visibility="hidden";
  document.getElementById("step10_44").style.visibility="hidden";
  document.getElementById("set43").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_45").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_2").style.visibility="visible";
      document.getElementById("tb_ok14").style.visibility="visible";

      },1000);
}


function ok14()

{
  document.getElementById("arowdwn10_2").style.visibility="hidden";
  document.getElementById("tb_ok14").style.visibility="hidden";
  document.getElementById("step10_45").style.visibility="hidden";
  document.getElementById("set44").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_46").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_4").style.visibility="visible";
      document.getElementById("tb_dwn21").style.visibility="visible";

      },1000);
}

function dwn21()

{
  document.getElementById("arowdwn10_4").style.visibility="hidden";
  document.getElementById("tb_dwn21").style.visibility="hidden";
  document.getElementById("step10_46").style.visibility="hidden";
  document.getElementById("set45").style.visibility="hidden";

  setTimeout(function()
  {
      $("#step10_47").slideDown("slow");

  },500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_3").style.visibility="visible";
      document.getElementById("tb_cancle10").style.visibility="visible";

      },1000);
}

function cancle10()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle10").style.visibility="hidden";
  document.getElementById("step10_47").style.visibility="hidden";
  document.getElementById("handfinger11").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set46").style.visibility="hidden";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger11" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_48").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("tb_cancle11").style.visibility="visible";
      document.getElementById("arowdwn10_3").style.visibility="visible";

      },3000);
 
}

function cancle11()

{
  document.getElementById("arowdwn10_3").style.visibility="hidden";
  document.getElementById("tb_cancle11").style.visibility="hidden";
  document.getElementById("step10_48").style.visibility="hidden";
  document.getElementById("handfinger12").style.visibility="visible";

  setTimeout(function()
  {
      document.getElementById("set47").style.visibility="hidden";
      document.getElementById("set23").style.visibility="visible";
           
  },800);

  setTimeout(function()
  {

      $( "#handfinger12" ).fadeOut(1000);
     
  },1300);

  setTimeout(function()
  {
      $("#step10_49").slideDown("slow");

  },2500);

  setTimeout(function()
      {

      document.getElementById("arowdwn10_1off").style.visibility="visible";
      document.getElementById("arowdwn10_1off").style.animation="arowdwn10_1offshk 0.5s infinite";
      document.getElementById("tb_transbtn2_can10").style.visibility="visible";

      },3000);
 
}


function transbtnoff_can10()

{
  document.getElementById("arowdwn10_1off").style.visibility="hidden";
  document.getElementById("tb_transbtn2_can10").style.visibility="hidden";
  document.getElementById("step10_49").style.visibility="hidden";
  document.getElementById("hand3_can10").style.visibility="visible";
  
  setTimeout(function()
  {
      document.getElementById("hand3_can10").style.animation="hand3_move_can10 0.2s forwards";

  },300);

  setTimeout(function()
  {
      document.getElementById("powerbutton_can10").style.visibility="hidden";
      document.getElementById("remotescreen_can10").style.visibility="visible";

  },500);

  setTimeout(function()
  {
      $( "#hand3_can10" ).fadeOut(1000);
     
  },1200);

  setTimeout(function()
  {
      $( "#remotezoom" ).fadeOut(1000);
      $( "#remotescreen_can10" ).fadeOut(1000);

      $( "#upbt" ).fadeOut(1000);
      $( "#downbt" ).fadeOut(1000);
      $( "#cancelbt" ).fadeOut(1000);
      $( "#okbt" ).fadeOut(1000);

      document.getElementById("set23").style.visibility="hidden";
     
  },3500);

  setTimeout(function()
  {
      document.getElementById("nextButton10").style.visibility="visible";
     
  },4500);

}


// =========================================CANVAS10==============================


// =========================================CANVAS11==============================

function navNext11()

{
  document.getElementById("canvas10").style.visibility="hidden";
  document.getElementById("canvas11").style.visibility="visible";
  document.getElementById("mrk_03").innerHTML=marks;
}


function ansshw_c11() {

            if(document.getElementById('optionB3').checked) {
                document.getElementById("ans_can11").innerHTML = document.getElementById("optionA3").value;
                document.getElementById("showans_can11").style.display="none";
                document.getElementById("mrk_03").innerHTML=marks;
                document.getElementById("nextButton11").style.visibility="visible";
            }
            else if(document.getElementById('optionD3').checked) {
              marks=marks+1;
              document.getElementById("ans_can11").style.color="green";
              document.getElementById("mrk_03").innerHTML=marks;
              document.getElementById("got_mrkcan11").style.visibility="visible";

              document.getElementById("ans_can11").innerHTML = document.getElementById("optionB3").value;
              document.getElementById("showans_can11").style.display="none";
              document.getElementById("nextButton11").style.visibility="visible";

              }

            else if(document.getElementById('optionC3').checked) {
             
                document.getElementById("ans_can11").innerHTML = document.getElementById("optionC3").value;
                document.getElementById("showans_can11").style.display="none";
                document.getElementById("nextButton11").style.visibility="visible";
                document.getElementById("mrk_03").innerHTML=marks;
            }
            else if(document.getElementById('optionA3').checked) {
                document.getElementById("ans_can11").innerHTML = document.getElementById("optionA3").value;
                document.getElementById("showans_can11").style.display="none";
                document.getElementById("nextButton11").style.visibility="visible";
                document.getElementById("mrk_03").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can11").innerHTML = "Select Option";
            }
        }


// =========================================CANVAS12==============================

function navNext12()

{
   document.getElementById("canvas11").style.visibility="hidden";
   document.getElementById("canvas12").style.visibility="visible";
}


// =========================================CANVAS13==============================

function navNext13()

{
   document.getElementById("canvas12").style.visibility="hidden";
   document.getElementById("canvas13").style.visibility="visible";

   setTimeout(function()
  {
      $("#step13_1").slideDown("slow");

  },1000);

   setTimeout(function()
  {
      document.getElementById("tb_transbtn13").style.visibility="visible";
      document.getElementById("arowdwn13_1").style.visibility="visible";
      document.getElementById("arowdwn13_1").style.animation="arowdwn13_1shk 0.5s infinite";


  },2000);
}

function transbtnon13()

{
    document.getElementById("step13_1").style.visibility="hidden";
    document.getElementById("tb_transbtn13").style.visibility="hidden";
    document.getElementById("arowdwn13_1").style.visibility="hidden";

    document.getElementById("hand_can13").style.visibility="visible";
    document.getElementById("hand_can13").style.animation="handcan13_move 0.2s forwards";

  setTimeout(function()
      {
        
      document.getElementById("powerbutton_can13").style.visibility="visible";
      document.getElementById("remotescreen_can13").style.visibility="hidden";
      
      },200);

  setTimeout(function()
      {

        $("#war_note").slideDown("slow");

      },500);

  setTimeout(function()
      {

        $( "#hand_can13" ).fadeOut(1000);
        document.getElementById("arow_war").style.visibility="visible";

      },900);

  setTimeout(function()
      {

        $("#step13_2").slideDown("slow");

      },2300);

  setTimeout(function()
      {

        document.getElementById("tb_tr01").style.visibility="visible";
        document.getElementById("arowdwn13_2").style.visibility="visible";
        document.getElementById("arowdwn13_2").style.animation="arowdwn13_2shk 0.5s infinite";

      },2800);
}

function tr01()
{
    document.getElementById("step13_2").style.visibility="hidden";
    document.getElementById("tb_tr01").style.visibility="hidden";
    document.getElementById("arowdwn13_2").style.visibility="hidden";

    document.getElementById("redarrow").style.visibility="visible";
    document.getElementById("redarrow").style.animation="redarrow1shk 0.5s infinite";

    document.getElementById("hand2_can13").style.visibility="visible";
    document.getElementById("throttle_black").style.visibility="visible";
    document.getElementById("hand2_can13").style.animation="hand2can13_move 1s forwards";
    $( "#remote_left_down" ).fadeIn(700);

    setTimeout(function()
      {

        $( "#hand2_can13" ).fadeOut(1000);
        $( "#redarrow" ).fadeOut(1000);
        $( "#war_note" ).fadeOut(1000);
        document.getElementById("war_img").style.visibility="hidden";
        document.getElementById("arow_war").style.visibility="hidden";

      },1000);

    setTimeout(function()
      {

        $("#step13_3").slideDown("slow");

      },2500);

    setTimeout(function()
      {

        document.getElementById("tb_tr02").style.visibility="visible";
        document.getElementById("arowdwn13_3").style.visibility="visible";
        document.getElementById("arowdwn13_3").style.animation="arowdwn13_3shk 0.5s infinite";

      },3000);
}


function tr02()

{
    document.getElementById("step13_3").style.visibility="hidden";
    document.getElementById("tb_tr02").style.visibility="hidden";
    document.getElementById("arowdwn13_3").style.visibility="hidden";

    document.getElementById("redarrow2").style.visibility="visible";
    document.getElementById("redarrow2").style.animation="redarrow2shk 0.6s infinite";

    document.getElementById("redarrow3").style.visibility="visible";
    document.getElementById("redarrow3").style.animation="redarrow3shk 0.6s infinite";

    document.getElementById("hand3_can13").style.visibility="visible";
    document.getElementById("hand3_can13").style.animation="hand3can13_move 1s forwards";
    document.getElementById("hand4_can13").style.visibility="visible";
    document.getElementById("hand4_can13").style.animation="hand4can13_move 1s forwards";

    document.getElementById("remote_left_down").style.visibility="hidden";
    document.getElementById("throttle_black2").style.visibility="visible";

    $( "#remote_left_til" ).fadeIn(700);
    $( "#remote_right_til" ).fadeIn(1000);

    setTimeout(function()
      {

        $( "#hand3_can13" ).fadeOut(1000);
        $( "#redarrow2" ).fadeOut(1000);
        $( "#hand4_can13" ).fadeOut(1000);
        $( "#redarrow3" ).fadeOut(1000);

      },2000);

    setTimeout(function()
      {

    document.getElementById("remote_left_til").style.visibility="hidden";
    document.getElementById("remote_right_til").style.visibility="hidden";
    document.getElementById("throttle_black2").style.visibility="hidden";
    document.getElementById("throttle_black").style.visibility="hidden";

      },3000);

    setTimeout(function()
      {

        $("#step13_4").slideDown("slow");

      },3500);

    setTimeout(function()
      {

        document.getElementById("arowdwn13_2").style.visibility="visible";
        document.getElementById("tb_tr03").style.visibility="visible";

      },4000);
}



function tr03()

{
    document.getElementById("step13_4").style.visibility="hidden";
    document.getElementById("tb_tr03").style.visibility="hidden";
    document.getElementById("arowdwn13_2").style.visibility="hidden";

    document.getElementById("redarrow4").style.visibility="visible";
    document.getElementById("redarrow4").style.animation="redarrow4shk 0.5s infinite";

    document.getElementById("throttle_black").style.visibility="visible";
    document.getElementById("hand5_can13").style.visibility="visible";
    document.getElementById("hand5_can13").style.animation="hand5can13_move 3s forwards";

    document.getElementById("drone_can13").style.animation="dronetakeoff_move 3s forwards linear";

    // $( "#remote_left_up" ).fadeIn(3200);

    setTimeout(function()
      {

        // $( "#hand5_can13" ).fadeOut(1000);
        document.getElementById("hand5_can13").style.visibility="hidden";
        document.getElementById("hand52_can13").style.visibility="visible";
        document.getElementById("hand52_can13").style.animation="hand52_can13shk 1s infinite";
        
        $( "#redarrow4" ).fadeOut(1000);

      },3500);

     setTimeout(function()
      {

        $("#step13_5").slideDown("slow");

      },4000);

    setTimeout(function()
      {

        // document.getElementById("remote_left_up").style.visibility="hidden";
        // document.getElementById("throttle_black").style.visibility="hidden";
        document.getElementById("nextButton13").style.visibility="visible";

      },6000);
}
// =========================================CANVAS13==============================



// =========================================CANVAS14==============================

function navNext14()

{
  document.getElementById("canvas13").style.visibility="hidden";
  document.getElementById("canvas14").style.visibility="visible";
  document.getElementById("mrk_04").innerHTML=marks;
}


function ansshw_c14() {

            if(document.getElementById('optionB4').checked) {
                document.getElementById("ans_can14").innerHTML = document.getElementById("optionA4").value;
                document.getElementById("showans_can14").style.display="none";
                document.getElementById("mrk_04").innerHTML=marks;
                document.getElementById("nextButton14").style.visibility="visible";
            }
            else if(document.getElementById('optionA4').checked) {
              marks=marks+1;
              document.getElementById("ans_can14").style.color="green";
              document.getElementById("mrk_04").innerHTML=marks;
              document.getElementById("got_mrkcan14").style.visibility="visible";

              document.getElementById("ans_can14").innerHTML = document.getElementById("optionB4").value;
              document.getElementById("showans_can14").style.display="none";
              document.getElementById("nextButton14").style.visibility="visible";

              }

            else if(document.getElementById('optionC4').checked) {
             
                document.getElementById("ans_can14").innerHTML = document.getElementById("optionC4").value;
                document.getElementById("showans_can14").style.display="none";
                document.getElementById("nextButton14").style.visibility="visible";
                document.getElementById("mrk_04").innerHTML=marks;
            }
            else if(document.getElementById('optionD4').checked) {
                document.getElementById("ans_can14").innerHTML = document.getElementById("optionA4").value;
                document.getElementById("showans_can14").style.display="none";
                document.getElementById("nextButton14").style.visibility="visible";
                document.getElementById("mrk_04").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can14").innerHTML = "Select Option";
            }
        }


// =========================================CANVAS15==============================

function navNext15()

{
   document.getElementById("canvas14").style.visibility="hidden";
   document.getElementById("canvas15").style.visibility="visible";
}

// =========================================CANVAS16==============================

function navNext16()

{
   document.getElementById("canvas15").style.visibility="hidden";
   document.getElementById("canvas16").style.visibility="visible";

   document.getElementById("hand66_can14").style.visibility="visible";
   document.getElementById("hand66_can14").style.animation="hand52_can13shk 1s infinite";


   setTimeout(function()
  {
      $("#step14_1").slideDown("slow");

  },1000);

   setTimeout(function()
  {
      document.getElementById("tb_tr04").style.visibility="visible";
      document.getElementById("arowdwn14_1").style.visibility="visible";
      document.getElementById("arowdwn14_1").style.animation="arowdwn14_1shk 0.5s infinite";

  },2000);
}


function tr04()

{
    document.getElementById("step14_1").style.visibility="hidden";
    document.getElementById("tb_tr04").style.visibility="hidden";
    document.getElementById("arowdwn14_1").style.visibility="hidden";

    document.getElementById("redarrow5").style.visibility="visible";
    document.getElementById("redarrow5").style.animation="redarrow5shk 0.5s infinite";

    document.getElementById("throttle_black14").style.visibility="visible";
    document.getElementById("hand1_can14").style.visibility="visible";
    document.getElementById("hand1_can14").style.animation="hand1can14_move 3s forwards";

    document.getElementById("drone_can16").style.animation="droneleft_move 3s forwards linear";

    $( "#remote_right_left" ).fadeIn(3200);

    setTimeout(function()
      {

        $( "#hand1_can14" ).fadeOut(800);
        $( "#redarrow5" ).fadeOut(800);

      },3300);

    setTimeout(function()
      {

        document.getElementById("remote_right_left").style.visibility="hidden";
        document.getElementById("throttle_black14").style.visibility="hidden";

      },3000);

    setTimeout(function()
  {
      $("#step14_2").slideDown("slow");

  },4500);

    setTimeout(function()
  {
      document.getElementById("tb_tr05").style.visibility="visible";
      document.getElementById("arowdwn14_1").style.visibility="visible";
  },5500);
}


function tr05()

{
    document.getElementById("step14_2").style.visibility="hidden";
    document.getElementById("tb_tr05").style.visibility="hidden";
    document.getElementById("arowdwn14_1").style.visibility="hidden";

    document.getElementById("redarrow6").style.visibility="visible";
    document.getElementById("redarrow6").style.animation="redarrow6shk 0.5s infinite";

    document.getElementById("throttle_black14").style.visibility="visible";
    document.getElementById("hand2_can14").style.visibility="visible";
    document.getElementById("hand2_can14").style.animation="hand2can14_move 3s forwards";

    document.getElementById("drone_can16").style.animation="droneright_move 3s forwards linear";

    $( "#remote_right_right" ).fadeIn(3200);

    setTimeout(function()
      {

        $( "#hand2_can14" ).fadeOut(800);
        $( "#redarrow6" ).fadeOut(800);

      },3300);

    setTimeout(function()
      {

        document.getElementById("remote_right_right").style.visibility="hidden";
        document.getElementById("throttle_black14").style.visibility="hidden";

      },3000);

    setTimeout(function()
  {
      $("#step14_3").slideDown("slow");

  },4500);

    setTimeout(function()
  {
      document.getElementById("tb_tr06").style.visibility="visible";
      document.getElementById("arowdwn14_1").style.visibility="visible";
  },5500);
}


function tr06()

{
    document.getElementById("step14_3").style.visibility="hidden";
    document.getElementById("tb_tr06").style.visibility="hidden";
    document.getElementById("arowdwn14_1").style.visibility="hidden";

    document.getElementById("redarrow7").style.visibility="visible";
    document.getElementById("redarrow7").style.animation="redarrow7shk 0.5s infinite";

    document.getElementById("throttle_black14").style.visibility="visible";
    document.getElementById("hand3_can14").style.visibility="visible";
    document.getElementById("hand3_can14").style.animation="hand3can14_move 3s forwards";

    document.getElementById("drone_can16").style.animation="droneright_forward 3s forwards linear";

    $( "#remote_right_up" ).fadeIn(3200);

    setTimeout(function()
      {

        $( "#hand3_can14" ).fadeOut(800);
        $( "#redarrow7" ).fadeOut(800);

      },3300);

    setTimeout(function()
      {

        document.getElementById("remote_right_up").style.visibility="hidden";
        document.getElementById("throttle_black14").style.visibility="hidden";

      },3700);

    setTimeout(function()
  {
      $("#step14_4").slideDown("slow");

  },4500);

    setTimeout(function()
  {
      document.getElementById("tb_tr07").style.visibility="visible";
      document.getElementById("arowdwn14_1").style.visibility="visible";
  },5500);
}


function tr07()

{
    document.getElementById("step14_4").style.visibility="hidden";
    document.getElementById("tb_tr07").style.visibility="hidden";
    document.getElementById("arowdwn14_1").style.visibility="hidden";

    document.getElementById("redarrow8").style.visibility="visible";
    document.getElementById("redarrow8").style.animation="redarrow8shk 0.5s infinite";

    document.getElementById("throttle_black14").style.visibility="visible";
    document.getElementById("hand4_can14").style.visibility="visible";
    document.getElementById("hand4_can14").style.animation="hand4can14_move 3s forwards linear";

    document.getElementById("drone_can16").style.animation="droneright_back 3s forwards linear";

    $( "#remote_right_down" ).fadeIn(3200);

    setTimeout(function()
      {

        $( "#hand4_can14" ).fadeOut(800);
        $( "#redarrow8" ).fadeOut(800);

        $( "#hand66_can14" ).fadeOut(800);
        document.getElementById("throttle2_black14").style.visibility="hidden";

      },4300);

    setTimeout(function()
      {

         $( "#grass_can16" ).fadeIn(2000);
         $( "#fullfinalshw_can16" ).fadeIn(2000);

      },5000);

    setTimeout(function()
      {

        document.getElementById("remote_right_down").style.visibility="hidden";
        document.getElementById("throttle_black14").style.visibility="hidden";

      },7000);

    setTimeout(function()
  {
      $("#step14_5").slideDown("slow");

  },7500);

    setTimeout(function()
  {
      document.getElementById("tb_tr08").style.visibility="visible";
      document.getElementById("arowdwn14_2").style.visibility="visible";
      document.getElementById("arowdwn14_2").style.animation="arowdwn14_2shk 0.5s infinite";

  },8500);
}


function tr08()

{
    document.getElementById("step14_5").style.visibility="hidden";
    document.getElementById("tb_tr08").style.visibility="hidden";
    document.getElementById("arowdwn14_2").style.visibility="hidden";

    document.getElementById("redarrow9").style.visibility="visible";
    document.getElementById("redarrow9").style.animation="redarrow9shk 0.5s infinite";

    document.getElementById("throttle2_black14").style.visibility="visible";
    document.getElementById("hand5_can14").style.visibility="visible";
    document.getElementById("hand5_can14").style.animation="hand5can14_move 3s forwards";

    document.getElementById("fullfinalshw_can16").style.animation="dronero1 4s forwards linear";

    $( "#remote_left_left" ).fadeIn(4200);

    setTimeout(function()
      {

        $( "#hand5_can14" ).fadeOut(800);
        $( "#redarrow9" ).fadeOut(800);

      },4300);

    setTimeout(function()
      {

        document.getElementById("remote_left_left").style.visibility="hidden";
        document.getElementById("throttle2_black14").style.visibility="hidden";

      },4700);

    setTimeout(function()
  {

    $("#step14_6").slideDown("slow");

  },5700);

    setTimeout(function()
  {
      document.getElementById("tb_tr099").style.visibility="visible";
      document.getElementById("arowdwn14_2").style.visibility="visible";

  },6500);

}


// =========================================CANVAS17==============================

function navNext17()

{
  document.getElementById("canvas16").style.visibility="hidden";
  document.getElementById("canvas17").style.visibility="visible";
  document.getElementById("mrk_05").innerHTML=marks;
}


function ansshw_c17() {

            if(document.getElementById('optionB5').checked) {
                document.getElementById("ans_can17").innerHTML = document.getElementById("optionA5").value;
                document.getElementById("showans_can17").style.display="none";
                document.getElementById("mrk_05").innerHTML=marks;
                document.getElementById("nextButton17").style.visibility="visible";
            }
            else if(document.getElementById('optionC5').checked) {
              marks=marks+1;
              document.getElementById("ans_can17").style.color="green";
              document.getElementById("mrk_05").innerHTML=marks;
              document.getElementById("got_mrkcan17").style.visibility="visible";

              document.getElementById("ans_can17").innerHTML = document.getElementById("optionB5").value;
              document.getElementById("showans_can17").style.display="none";
              document.getElementById("nextButton17").style.visibility="visible";

              }

            else if(document.getElementById('optionA5').checked) {
             
                document.getElementById("ans_can17").innerHTML = document.getElementById("optionC5").value;
                document.getElementById("showans_can17").style.display="none";
                document.getElementById("nextButton17").style.visibility="visible";
                document.getElementById("mrk_05").innerHTML=marks;
            }
            else if(document.getElementById('optionD5').checked) {
                document.getElementById("ans_can17").innerHTML = document.getElementById("optionA5").value;
                document.getElementById("showans_can17").style.display="none";
                document.getElementById("nextButton17").style.visibility="visible";
                document.getElementById("mrk_05").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can17").innerHTML = "Select Option";
            }
        }


// =========================================CANVAS18==============================

function navNext18()
{
    document.getElementById("canvas17").style.visibility="hidden";
    document.getElementById("canvas18").style.visibility="visible";
}

// =========================================CANVAS19==============================

function navNext19()
{
    document.getElementById("canvas18").style.visibility="hidden";
    document.getElementById("canvas19").style.visibility="visible";

    setTimeout(function()
      {

        $("#step19_1").slideDown("slow");

      },1000);

  setTimeout(function()
      {

        document.getElementById("tb_tr09").style.visibility="visible";
        document.getElementById("arowdwn19_1").style.visibility="visible";
        document.getElementById("arowdwn19_1").style.animation="arowdwn13_2shk 0.5s infinite";

      },2000);
}

function tr09()
{
    document.getElementById("step19_1").style.visibility="hidden";
    document.getElementById("tb_tr09").style.visibility="hidden";
    document.getElementById("arowdwn19_1").style.visibility="hidden";

    document.getElementById("redarrow10").style.visibility="visible";
    document.getElementById("redarrow10").style.animation="redarrow1shk 0.5s infinite";

    document.getElementById("hand1_can19").style.visibility="visible";
    document.getElementById("throttle_black19").style.visibility="visible";
    document.getElementById("hand1_can19").style.animation="hand2can13_move 3s forwards";

    $( "#remote_left_down2" ).fadeIn(3200);

    document.getElementById("drone_can19").style.animation="droneland_move 3s forwards linear";

    setTimeout(function()
      {

        $( "#hand1_can19" ).fadeOut(1000);
        $( "#redarrow10" ).fadeOut(1000);

      },3500);

    setTimeout(function()
      {

        document.getElementById("remote_left_down2").style.visibility="hidden";
        document.getElementById("throttle_black19").style.visibility="hidden";

      },4500);

    setTimeout(function()
      {

        $("#step19_2").slideDown("slow");

      },5500);

    setTimeout(function()
      {

        document.getElementById("tb_tr010").style.visibility="visible";
        document.getElementById("arowdwn19_2").style.visibility="visible";
        document.getElementById("arowdwn19_2").style.animation="arowdwn13_3shk 0.5s infinite";

      },6500);
}


function tr010()
{
    document.getElementById("step19_2").style.visibility="hidden";
    document.getElementById("tb_tr010").style.visibility="hidden";
    document.getElementById("arowdwn19_2").style.visibility="hidden";

    document.getElementById("redarrow11").style.visibility="visible";
    document.getElementById("redarrow11").style.animation="redarrow11shk 0.6s infinite";

    document.getElementById("redarrow12").style.visibility="visible";
    document.getElementById("redarrow12").style.animation="redarrow12shk 0.6s infinite";

    document.getElementById("hand2_can19").style.visibility="visible";
    document.getElementById("hand2_can19").style.animation="hand2can19_moves 1s forwards";
    document.getElementById("hand3_can19").style.visibility="visible";
    document.getElementById("hand3_can19").style.animation="hand3can19_moves 1s forwards";

    document.getElementById("throttle_black19").style.visibility="visible";
    document.getElementById("throttle_black219").style.visibility="visible";

    $( "#remote_left_til2" ).fadeIn(700);
    $( "#remote_right_til2" ).fadeIn(1000);

    setTimeout(function()
      {

        $( "#hand2_can19" ).fadeOut(1000);
        $( "#hand3_can19" ).fadeOut(1000);

        $( "#redarrow11" ).fadeOut(1000);
        $( "#redarrow12" ).fadeOut(1000);

      },2000);

    setTimeout(function()
      {

    document.getElementById("remote_left_til2").style.visibility="hidden";
    document.getElementById("remote_right_til2").style.visibility="hidden";
    document.getElementById("throttle_black219").style.visibility="hidden";
    document.getElementById("throttle_black19").style.visibility="hidden";

      },3000);

    setTimeout(function()
      {

        $( "#zoombatterywire" ).fadeIn(1000);

      },3500);

    setTimeout(function()
      {

        document.getElementById("svg_can15").style.visibility="visible";
        document.getElementById("handle1_can15").style.visibility="visible";

        document.getElementById("tplugup").style.visibility="visible";
        document.getElementById("zoomwire2b").style.visibility="visible";

      },3800);

    setTimeout(function()
      {

        $("#step19_3").slideDown("slow");

      },4500);

    setTimeout(function()
      {

        $("#step19_3").slideDown("slow");

        document.getElementById("arowdwn19_3").style.visibility="visible";
        document.getElementById("arowdwn19_3").style.animation="arowdwn19_3shk 0.5s infinite";

      },5000);

}


// ===================================wire==============================


var targets15_1 = $("#handle1_div_can15");
var bezierWeight5 = 0.675;

var handles_can15 = document.querySelectorAll(".handle_can15");
var path_can15 = document.querySelector(".path_can15");

TweenLite.set(handles_can15[1], { x: 796, y: 409 });
TweenLite.set(handles_can15[0], { x: 889, y: 208 });

Draggable.create(handles_can15, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can15[1]._gsTransform.x;
  var y1 = handles_can15[1]._gsTransform.y;
  
  var x4 = handles_can15[0]._gsTransform.x;
  var y4 = handles_can15[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can15.setAttribute("d", data);

   document.getElementById("zoomwire2b").style.visibility="hidden";
   document.getElementById("arowdwn19_3").style.visibility="hidden";
   document.getElementById("step19_3").style.visibility="hidden";

   setTimeout(function()
          {

      $( "#zoombatterywire" ).fadeOut(1000);
      $( "#tplugup" ).fadeOut(1000);
      $( "#zoomwire2b" ).fadeOut(1000);
      $( "#handle1_can15" ).fadeOut(1000);      
      
         },2000);

    setTimeout(function()
          {

     document.getElementById("svg_can15").style.visibility="hidden";
      
         },2500);

    setTimeout(function()
          {

     $("#step19_4").slideDown("slow");
      
         },3500);

    setTimeout(function()
      {

        $("#step19_3").slideDown("slow");

        document.getElementById("arowdwn19_4").style.visibility="visible";
        document.getElementById("arowdwn19_4").style.animation="arowdwn19_4shk 0.5s infinite";

        document.getElementById("tb_pwrbtn").style.visibility="visible";

      },4000);

   
  for(var i=0; i<targets15_1.length;i++)

  {
    if (this.hitTest(targets15_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();

    }
  }
}
  
});


function pwrbtnoff()
{
    document.getElementById("step19_4").style.visibility="hidden";
    document.getElementById("arowdwn19_4").style.visibility="hidden";
    document.getElementById("tb_pwrbtn").style.visibility="hidden";

    document.getElementById("hand4_can19").style.visibility="visible";
    document.getElementById("hand4_can19").style.animation="hand4_can19move 0.2s forwards";

    setTimeout(function()
          {

     document.getElementById("powerbutton19").style.visibility="hidden";
     document.getElementById("blindingss2_can19").style.visibility="hidden";

     document.getElementById("remotescreen_can19").style.visibility="visible";
      
         },200);

    setTimeout(function()
          {

     $( "#hand4_can19" ).fadeOut(1000); 
      
         },900);


    setTimeout(function()
          {

     document.getElementById("nextButton19").style.visibility="visible";
     
         },1500); 

}

// =========================================CANVAS19==============================


function navNext20()

{
  document.getElementById("canvas19").style.visibility="hidden";
  document.getElementById("canvas20").style.visibility="visible";
  document.getElementById("totalmarks").innerHTML=marks;
}


function tr099()
{
    document.getElementById("step14_6").style.visibility="hidden";
    document.getElementById("tb_tr099").style.visibility="hidden";
    document.getElementById("arowdwn14_2").style.visibility="hidden";

    document.getElementById("hand6_can14").style.visibility="visible";
    document.getElementById("throttle2_black14").style.visibility="visible";
    document.getElementById("hand6_can14").style.animation="hand6can14_move 3s forwards";

    $( "#remote_left_right" ).fadeIn(3200);

    document.getElementById("fullfinalshw_can16").style.animation="dronero22 4s forwards linear";

    setTimeout(function()
      {

        $( "#hand6_can14" ).fadeOut(1000);

      },3500);

    setTimeout(function()
      {

        document.getElementById("remote_left_right").style.visibility="hidden";
        document.getElementById("throttle2_black14").style.visibility="hidden";

      },4500);

    setTimeout(function()
          {

     $( "#fullfinalshw_can16" ).fadeOut(1000);
     $( "#grass_can16" ).fadeOut(1000); 
      
         },5500);

    setTimeout(function()
  {
      document.getElementById("nextButton16").style.visibility="visible";

  },6500);

    // setTimeout(function()
    //   {

    //     $("#step19_2").slideDown("slow");

    //   },5500);

    // setTimeout(function()
    //   {

    //     document.getElementById("tb_tr010").style.visibility="visible";
    //     document.getElementById("arowdwn19_2").style.visibility="visible";
    //     document.getElementById("arowdwn19_2").style.animation="arowdwn13_3shk 0.5s infinite";


    //   },6500);
}



function reset()
{
    location.reload();
}
