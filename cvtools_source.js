/*

       canvas drawtool(beta)
         by TheR
instructions:


box draws a scuare
box(posX, posY, endposX, endposY, color, strokeColor, strokeWith)
color,strokeColor and strokeWith are optional
------------------
cls fills the screen with a color
cls(color,strokeColor,strokeWidth)
all parameters are optional
------------------
text draws a text
text(text,posX,posY,fontSize,font,textColor,strokeColor,strokeWidth)
textColor, strokeColor and strokeWidth are optional
------------------
img draws an image
img(imageLocationOrUrl,posX,posY,height,width,strokeColor,strokeWidth)
strokeColor and strokeWidth are optional
------------------
circ draws a circle
circ(centerX,centerY,radius,startingAngle,endingAngle,color,strokeColor,strokeWidth)
color,strokeColor,strokeWidth are optional
*/
//config:
var cvwidth = 0;
var cvheight = 0;
var cvborder = 0;

document.write('<canvas id="cv" width="'+cvwidth+'" height="'+cvheight+'" style="border:'+cvborder+'px red solid;"></canvas>')
var ctx=document.getElementById("cv").getContext("2d");

function box(posX,posY,width,height,color,strokecolor,strokewidth){
ctx.beginPath()
ctx.rect(posX,posY,width,height);
ctx.lineWidth= strokewidth;
ctx.strokeStyle= strokecolor;
ctx.fillStyle = color;
ctx.stroke();
 ctx.fill();
}
function cls(color, strokeColor,strokeWidth){
    ctx.clearRect(0,0,cvwidth,cvheight)
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
ctx.rect(0,0,cvwidth,cvheight)
  ctx.fillStyle = color;
    ctx.fill()
    ctx.stroke()
}

function text(text,posX,posY,fontSize,font,color,strokeColor,strokewidth){
    ctx.beginPath()
    ctx.font = (fontSize+"px"+" "+font); 
    ctx.fillStyle = color;
    ctx.lineWidth = strokewidth;
    ctx.strokeStyle = strokeColor;
    ctx.strokeText(text, posX, posY);
    ctx.fillText(text, posX, posY); 
}
function img(image,posX,posY,height,width,strokeColor,strokeWidth){
    ctx.beginPath()
    ctx.rect(posX,posY,width,height);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth=strokeWidth;
    ctx.stroke();
    var img = new Image();
    img.src = image;
    img.onload=function(){
    ctx.drawImage(img, posX, posY, height, width);
};
}
function circ(centerX, centerY, radio,startingAngle, endingAngle, fillColor, strokeColor,strokeWidth){
ctx.beginPath();
ctx.arc(centerX, centerY, radio, startingAngle, endingAngle);
ctx.strokeStyle = strokeColor;
ctx.lineWidth= strokeWidth;
ctx.fillStyle= fillColor;
ctx.stroke()
ctx.fill();  

}
function line(startX,startY,endX,endY,color,width){
    ctx.beginPath()
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
}
