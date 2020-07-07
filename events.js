function formSubmit(event){
   event.preventDefault();
    console.log(event);
}

function parent(event) {
    console.log('parent');
    event.stopImmediatePropagation();
}


function child(event) {
    console.log('child');
    event.stopImmediatePropagation();
}


function grandChild(event) {
    console.log('grandChild');
    event.stopImmediatePropagation();
}