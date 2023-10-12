var MU="";
var MU2="";
var T="T";
var RX= "";
var LX= "";
var S="R1";
var ISP1="T";
var ISP2="F";
var NX="";
var NY="";
var V="";
var VN="";
var LY="";
var LYN="";
function preload(){
    MU=loadSound("music.mp3");
    MU2=loadSound("music2.mp3");
}
function setup(){
    C=createCanvas(300, 200);
    C.center();
    VC= createCapture(VIDEO);
    VC.hide();
    M= ml5.poseNet(VC, ML);
    M.on("pose", GR);
}
function draw(){
    image(VC, 0, 0, 300, 200);
    if(S=="R1"){
    if(T=="T"){
    MU2.stop();
    MU.play();
    T="F";
    }}else{
        if(T=="T"){
            MU.stop();
            MU2.play();
            T="F";
            }
    }

    //if(S=="R1"){
       // if(ISP1=="F"){
    //    MU2.stop();
    //    MU.play();
      //  ISP1="T";
        //ISP2="F";
        //}
  //  }else{
//        if(ISP2=="F")
//        MU.stop();
//        MU2.play();
//        ISP2="T";
//        ISP1="F";
//    }
}
function GR(R){
    if (R.length!==0) {
            console.log(R);
            if(R[0].pose.keypoints[10].score>0.2){
                
                    if(S=="L2"){S="R1";
                    T="T";
                    console.log("R1");}
                
            }
            if(R[0].pose.keypoints[9].score>0.2){
                if(S=="R1"){
                    S="L2";
                    T="T";
                    console.log("L2");}
                       
            }
            if(R[0].pose.keypoints[0].score>0.2){
                NX=R[0].pose.nose.x;
                NY=R[0].pose.nose.y;
            V= Number(NX);
            NV= V/600;
            MU.setVolume(NV);
            MU2.setVolume(NV);
            document.getElementById("V").innerHTML="Volume: "+floor(NV*100)
                console.log(NX,NY);
                LYN= NY-100;
            if(LYN<100){
                MU.rate(0.5);
                MU2.rate(0.5);
                document.getElementById("S").innerHTML="Speed: 0.5x";
            }if(LYN>100 && LYN<200){
                MU.rate(1);
                MU2.rate(1);
                document.getElementById("S").innerHTML="Speed: 1x";
            }if(LYN>200 && LYN<300){
                MU.rate(1.5);
                MU2.rate(1.5);
                document.getElementById("S").innerHTML="Speed: 1.5x";
            }if(LYN>300 && LYN<400){
                MU.rate(2);
                MU2.rate(2);
                document.getElementById("S").innerHTML="Speed: 2x";
            }
        }
}
}
function ML(){
    console.log("d");
}
