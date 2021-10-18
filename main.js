function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background('#42f5e3');
    fill('##32a8a0');
    stroke('#e0246f');
    text('Pahal',noseX,noseY);
    textSize(difference);
}

function modelLoaded(){
    console.log('Posenet Is Initialized!');
}

noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose X= "+ noseX +"noseY = " + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = leftWristX-rightWristX;
}
}