function Detect_sound() 
{
    navigator.mediaDevices.getUserMedia({ audio: true});
       classifier = ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/a45HoQVlE/.jason", modelReady);
}

function model_ready() {
    classifier.classify( gotResults);
}

function Name_of_animals() {
   console.log('Name the animals')
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("results_label").inerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("results_confidence").inerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("results_label").style.color = "rgb("
        +random_number_r+","+randome_number_g+","+random_number_b+")";
        document.getElementById("results_confidence").style.color = "rgb("
        +random_number_r+","+randome_number_g+","+random_number_b+")";

        img = document.getElementById('cat.jpeg');
        img1 = document.getElementById('dog.jpeg');
        img2 = document.getElementById('lion.jpeg');

        if (results[0].label == "meow") {
            img.src = 'cat.jpeg';
        } else if (results[0].label == "bark") {
            img1.src = "dog.jpeg"
        }else if (results[0].label == "roar") {
            img1.src = "lion.jpeg"
    }   
  }
}