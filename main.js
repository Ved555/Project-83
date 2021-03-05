canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;

        ctx.lineWidth = width_of_line;


        ctx.moveTo(last_pos_of_x,last_pos_of_y);


        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_pos_of_x = current_position_of_mouse_x;
    last_pos_of_y = current_position_of_mouse_y;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_pos_of_touch__x,last_pos_of_touch_y);


    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);

    ctx.stroke();

    last_pos_of_touch__x = current_position_of_touch_x;
    last_pos_of_touch_y = current_position_of_touch_y;

}

ctx.addEventListener("touchstart", my_touchstart);

function touchstart(e){
    last_pos_of_touch__x = current_position_of_touch_x;
    last_pos_of_touch_y = current_position_of_touch_y;
}