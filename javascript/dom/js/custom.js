

// var idOutput = document.getElementById('content');
// console.log(idOutput);
// var output = idOutput.innerText;
// console.log(output);
// var output = idOutput.innerHTML;
// console.log(output);


// var classOutput = document.getElementsByClassName('content');
// console.log(classOutput[2].innerText);

// var classOutput = document.getElementsByTagName('p');
// console.log(classOutput[3].innerText);

// var querySelector = document.querySelector('div');

var querySelector = document.querySelectorAll('p');

console.log(querySelector);

function dataSwipe(){
    var data1 = document.getElementById('content1');
    var data2 = document.getElementById('content2');
    var data3 = data2.innerHTML;

    data2.innerHTML = data1.innerHTML;
    data1.innerHTML = data3;
}