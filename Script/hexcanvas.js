var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;

    console.log(e)
});


