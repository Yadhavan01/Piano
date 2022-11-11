var totalLength = document.querySelectorAll(".btn").length;
for (var i = 0; i < totalLength; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", fun)
}
function fun() {
    var play = this.innerHTML;
    makeSound(play);

    
}
document.addEventListener("keypress", function(event){

    makeSound(event.key)
})
function makeSound(key){
    switch (key) {
        case "C":
            var music = new Audio("key-1.mp3")
            music.play();
            break;
        case "D":
            var music = new Audio("key14.mp3")
            music.play();
            break;
        case "E":
            var music = new Audio("key15.mp3")
            music.play();
            break;
        case "F":
            var music = new Audio("key16.mp3")
            music.play();
            break;
        case "G":
            var music = new Audio("key17.mp3")
            music.play();
            break;
        case "A":
            var music = new Audio("key18.mp3")
            music.play();
            break;
        case "B":
            var music = new Audio("key19.mp3")
            music.play();
            break;
        case "L":
            var music = new Audio("key2.mp3")
            music.play();
            break;

        default:
            break;
    }

    
}







