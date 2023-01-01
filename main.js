function startt(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    }  )    
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/hmJrvOtRk/model.json", modelready)  
}


function modelready(){
    
    classifier.classify(gotresults)
}

function gotresults(e,r){ 
 
     if(e){
        console.error(e)
    }
    else{
        console.log(r)
    }
}


