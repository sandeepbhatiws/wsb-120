function changeBulb(){
    var btn = document.getElementById('btn');
    var image = document.getElementById('image');

    if(btn.innerText == 'On'){
        image.src = 'images/multi_bulb_on.jpg';
        btn.innerText = 'Off';
    } else {
        image.src = 'images/multi_bulb_off.jpg';
        btn.innerText = 'On';
    }
}