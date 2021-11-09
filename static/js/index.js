
function handleClick(evt) {
    switch (evt.button) {
        case 0:
            toggleDarkness(evt);
            break;
        case 2:
            activateZoomModal(evt);
    }
}

function toggleDarkness(evt) {
    console.log(evt);
    evt.target.classList.toggle("darkened")
}

function addClickListeners() {
    let images = document.getElementsByTagName("img");

    for (var i=0;i<images.length;i++) {
        images[i].addEventListener('mouseup', handleClick);
    }

    document.getElementById("zoom-modal-background").addEventListener("click", deactivateZoomModal);
    document.getElementById("zoom-modal-close").addEventListener("click", deactivateZoomModal);
}

function findPageDimensions() {
    const pageWidth  = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;

    console.log(pageWidth, pageHeight);
}

function activateZoomModal(evt) {
    let zoomModal = document.getElementById("zoom-modal")
    zoomModal.classList.add("is-active");
    console.log(evt);
    document.getElementById("zoom-modal-img").setAttribute("src", evt.originalTarget.src);
    document.getElementById("zoom-modal-name").innerText = evt.originalTarget.parentNode.nextElementSibling.innerText;
}

function deactivateZoomModal() {
    document.getElementById("zoom-modal").classList.remove("is-active");
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