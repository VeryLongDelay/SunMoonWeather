// Input parameters
let input = JSON.parse(`Input Parameters`);


with(canvas = document.createElement("canvas")) with(context = getContext("2d")) {
canvas.width =input.width;
canvas.height = input.height;

if (input.doing > 0) {





let myString = input.clock1;
context.font = input.font;
context.fillStyle = input.shcolor;
context.fillText(myString, 302, 43);
context.fillStyle = input.color;
context.fillText(myString, 300, 41);

if (input.prob1 ===0) {
myString = " "+input.prob1+"%";
} else {
myString = input.prob1+"%";
}
context.fillStyle = input.shcolor;
context.fillText(myString, 312, 222);
context.fillStyle = input.color;
context.fillText(myString, 310, 220);

let y1 = 170;

let y2 = 172 - (input.prob1/100)*98;

context.beginPath();
context.moveTo(352, (y1+2));
context.lineTo(352, (y2+2));
context.lineWidth = input.lineWidth;
context.strokeStyle = input. shcolor;
//context.lineCap = "round";
context.stroke();


context.beginPath();
context.moveTo(350, y1);
context.lineTo(350, y2);
context.lineWidth = input.lineWidth;
if (input.prob1 > 35) {
context.strokeStyle = input. lineRColor;
} else {
context.strokeStyle = input. lineColor;
}
//context.lineCap = "round";
context.stroke();



// 2nd hour
myString = input.clock2;
context.fillStyle = input.shcolor;
context.fillText(myString, 477, 43);
context.fillStyle = input.color;
context.fillText(myString, 475, 41);



if (input.prob2 ===0) {
myString = " "+input.prob2+"%";
} else {
myString = input.prob2+"%";
}
context.fillStyle = input.shcolor;
context.fillText(myString, 487, 222);
context.fillStyle = input.color;
context.fillText(myString, 485, 220);

y2 = y1 + 2 - (input.prob2/100)*98;

context.beginPath();
context.moveTo(527, (y1+2));
context.lineTo(527, (y2+2));
context.lineWidth = input.lineWidth;
context.strokeStyle = input. shcolor;

context.stroke();

context.beginPath();
context.moveTo(525, y1);
context.lineTo(525, y2);
context.lineWidth = input.lineWidth;
if (input.prob2 > 35) {
context.strokeStyle = input. lineRColor;
} else {
context.strokeStyle = input. lineColor;
}

context.stroke();

// 3rd hour
myString = input.clock3;
context.fillStyle = input.shcolor;
context.fillText(myString, 652, 43);
context.fillStyle = input.color;
context.fillText(myString, 650, 41);

if (input.prob3 ===0) {
myString = " "+input.prob3+"%";
} else {
myString = input.prob3+"%";
}
context.fillStyle = input.shcolor;
context.fillText(myString, 662, 222);
context.fillStyle = input.color;
context.fillText(myString, 660, 220);

y2 = y1 + 2  - (input.prob3/100)*98;

context.beginPath();
context.moveTo(702, (y1+2));
context.lineTo(702, (y2+2));
context.lineWidth = input.lineWidth;
context.strokeStyle = input. shcolor;

context.stroke();

context.beginPath();
context.moveTo(700, y1);
context.lineTo(700, y2);
context.lineWidth = input.lineWidth;
if (input.prob3 > 35) {
context.strokeStyle = input. lineRColor;
} else {
context.strokeStyle = input. lineColor;
}

context.stroke();

// 4th hour
myString = input.clock4;
context.fillStyle = input.shcolor;
context.fillText(myString, 827, 43);
context.fillStyle = input.color;
context.fillText(myString, 825, 41);

if (input.prob4 ===0) {
myString = " "+input.prob4+"%";
} else {
myString = input.prob4+"%";
}
context.fillStyle = input.shcolor;
context.fillText(myString, 837, 222);
context.fillStyle = input.color;
context.fillText(myString, 835, 220);

y2 = y1 + 2  - (input.prob4/100)*98;

context.beginPath();
context.moveTo(877, (y1+2));
context.lineTo(877, (y2+2));
context.lineWidth = input.lineWidth;
context.strokeStyle = input. shcolor;

context.stroke();

context.beginPath();
context.moveTo(875, y1);
context.lineTo(875, y2);
context.lineWidth = input.lineWidth;
if (input.prob4 > 35) {
context.strokeStyle = input. lineRColor;
} else {
context.strokeStyle = input. lineColor;
}

context.stroke();

} else {
// no rain nothing to plot
let myString = " ";
context.font = input.font;
context.fillStyle = input.color;
context.fillText(myString, 300, 41);
}
//context.fillStyle = "#FFDFE0";
//context.strokeStyle = input.color;
//context.strokeText(myString, 400,5);


    // Show base64 encoding of the generated image
    document.write(toDataURL().split(',')[1]);
}
