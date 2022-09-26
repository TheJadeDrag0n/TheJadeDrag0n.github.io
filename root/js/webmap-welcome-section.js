
windowSize = 512
numOfPoints = 15
distMax = 175
pointsCords = []

colors = [
    [113, 46, 204],
    [204, 113, 46],
    [46, 58, 204],
    [204, 46, 137],
    [204, 192, 46]
]

function genPoints() {

    pointsCords = []

    for (let i = 0; i < numOfPoints; i++) {
        let x = floor(random(width))
        let y = floor(random(height))
        pointsCords.push([x, y])
    }

}

function drawPoints() {
    stroke('purple')
    strokeWeight(4)
    for (i in pointsCords) {
        point(pointsCords[i][0], pointsCords[i][1])
    }
}

function setup() {
    let canvas_size = document.getElementById('canvas').getBoundingClientRect()
    let cnv = createCanvas(floor(canvas_size.width), floor(canvas_size.height));
    cnv.parent('canvas');

    colorChoice = floor(random(colors.length))
    rBias = floor(random(-30, 30))
    gBias = floor(random(-30, 30))
    bBias = floor(random(-30, 30))

    resetSketch(colorChoice, rBias, gBias, bBias)
}

function resetSketch(colorChoice, rBias, gBias, bBias) {

    genPoints()

    loadPixels()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            pointsDist = []

            for (let i = 0; i < pointsCords.length; i++) {
                pointsDist.push(floor(dist(x, y, pointsCords[i][0], pointsCords[i][1])))
            }

            Array.min = function(pointsDist) {
                return Math.min.apply(Math, pointsDist)
            }

            let distMin = Array.min(pointsDist)

            let r = (distMin / distMax) * (colors[colorChoice][0] + rBias)
            let g = (distMin / distMax) * (colors[colorChoice][1] + gBias)
            let b = (distMin / distMax) * (colors[colorChoice][2] + bBias)

            let index = (x + y * width) * 4
            pixels[index] = r
            pixels[index + 1] = g
            pixels[index + 2] = b
            pixels[index + 3] = 255

        }
    }
    updatePixels()
}