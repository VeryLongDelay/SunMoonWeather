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
        fillText(text, x+2, y+2);

        context.font = font; // yep, again
        fillStyle = color;
        fillText(text, x, y);

    }
    // Show base64 encoding of the generated image
    document.write(toDataURL().split(',')[1]);
}
