
function toggleDarkness(evt) {
    console.log(evt);
    evt.target.classList.toggle("darkened")
}

function addClickListeners() {
    let images = document.getElementsByTagName("img");

    for (var i=0;i<images.length;i++) {
        images[i].addEventListener('click', toggleDarkness);
    }
}

function findPageDimensions() {
    const pageWidth  = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;

    console.log(pageWidth, pageHeight);
}


function pageLoaded(fn) {
    if (document.readyState != 'loading') {
        fn();
    } 
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
  
pageLoaded(function() {       
    findPageDimensions(); 
    addClickListeners();
});