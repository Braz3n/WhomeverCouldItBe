

function pageLoaded(fn) {
    if (document.readyState != 'loading') {
        fn();
    } 
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
  
pageLoaded(function() {

});