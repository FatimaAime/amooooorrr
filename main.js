
var lastpositionofX,lastpositionofY;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="green";
widthofline=6;
var width=screen.width;
new_width=screen.width - 70;
new_height=screen.height - 300;

if (width < 992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
console.log("mytouchstart")

lastpositionofX = e.touches[0].clientX - canvas.offsetLeft;
lastpositionofY = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){


    console.log("mytouchmove")
     current_position_of_touch_x= e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y= e.touches[0].clientY - canvas.offsetTop

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log("Last position of x and coordinates = ");
        console.log("x " + lastpositionofX + "y = " + lastpositionofY);
        ctx.moveTo(lastpositionofX, lastpositionofY);

        console.log("Current position of x and y coordinates");
        console.log("x = " + current_position_of_touch_x + "y = "+ current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

     lastpositionofX= current_position_of_touch_x;
     lastpositionofY= current_position_of_touch_y;

}

