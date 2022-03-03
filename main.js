function preload()
{
    classifier = ml5.imageClassifier("Doodlenet");
}

function setup()
{
    canvas = createCanvas(450, 350);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw()
{
    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sketch_name").innerHTML = results[0].label;
        percentag = results[0].confidence*100;
        document.getElementById("confidence").innerHTML = percentag.toFixed(2) + " %";
    }
}

function clear_canvas()
{
    background("white")
}