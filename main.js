function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/k-smRvHZL/model.json',modelReady)

}
function modelReady(){
    classifier.classify(gotResults)
}
img=document.getElementById("ear")
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
document.getElementById("result_label").innerHTML=results[0].label
document.getElementById("result_confidence").innerHTML=results[0].confidence
if(results[0].label=="tiger"){
    document.getElementById("result_label").innerHTML="tiger";
    img.src="Animal3.jpg";
}
else if(results[0].label=="cat"){
    document.getElementById("result_label").innerHTML="cat"
    img.src="Animal1.jpg";
}
else if(results[0].label=="dog"){
    document.getElementById("result_label").innerHTML="dog"
    img.src="Animal2.jpg";
}
    }
}