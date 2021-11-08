
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
});