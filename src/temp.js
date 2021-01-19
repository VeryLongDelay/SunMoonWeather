// Input parameters
let input = JSON.parse(`Input Parameters`);
// Generate image from input
with(canvas = document.createElement("canvas")) with(context = getContext("2d")) {
    font = input.font;
    with(measureText(input.text)) with(input) {
        // Determine position and size of the text (min. canvas size = text size)
        width = Math.max(width, actualBoundingBoxRight + actualBoundingBoxLeft + 2);
        height = Math.max(height, actualBoundingBoxAscent + actualBoundingBoxDescent);
        let x = (width - actualBoundingBoxRight + actualBoundingBoxLeft) / 2;
        let y = (height + actualBoundingBoxAscent - 1) / 2;
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        // If canvas isn't high enough, enlarge canvas and re-center vertically
        if (y - actualBoundingBoxAscent - actualBoundingBoxDescent < 0) {
            canvas.height += actualBoundingBoxDescent;
            y += y - actualBoundingBoxAscent;
        }
        // Generate background
        fillStyle = bgcolor;
        fillRect(0, 0, canvas.width, canvas.height);
        // Draw text with shadow
context.font = font; // yep, again
        fillStyle = shcolor;

//var i;
//var j = 0;
//var opac = 0.5;
//for (i = 0; i < 200; i++) {
//opac = opac - 0.1/(i+1);
//if (opac <0) { opac = 0; }
//fillStyle ="rgba(0, 0, 0, "+opac+")";
 //j=j+1/2;
  //fillText(text, x+j, y+i);
//}

        fillText(text, x+4, y+4);

        context.font = font; // yep, again
        fillStyle = color;
        fillText(text, x, y);

    }
    // Show base64 encoding of the generated image
    document.write(toDataURL().split(',')[1]);
}
