
var gallery = document.getElementById('gallery');

gallery.addEventListener('click',(event) => {

    if(event.target.tagName === 'IMG'){
        console.log(event.target.src);
        document.querySelector('.lightbox_image').src = event.target.src;
        document.getElementById('lightbox').classList.add('show');
    }
    
});

document.querySelector('.close').addEventListener('click',() => {
    document.getElementById('lightbox').classList.remove('show');
})