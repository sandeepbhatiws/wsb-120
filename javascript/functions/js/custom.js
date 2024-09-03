
function sum(){
    var a = 5;
    var b = 10;
    var output = a+b;

    document.write(output);
}

function add(b,a){
    var output = a+b;

    document.write(output);
}

var x = 10;
var y = 20;

// add(x,y);

// sum();

function calsum(x,y){
    return x+y;
}

function calminus(x,y){
    return x-y;
}

function calculation(a,b){
    output = calsum(a,b);

    output = calminus(output,b);

    document.write(output);
}

function changeImage(value){

    if(value == 1){
        document.getElementById('image1').src = 'images/3.jpg';
        document.getElementById('image2').src = 'images/1.jpg';
    } else {
        document.getElementById('image2').src = 'images/3.jpg';
        document.getElementById('image1').src = 'images/1.jpg';
    }
    console.log(value);
}