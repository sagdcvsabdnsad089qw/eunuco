var server = require("express");
var booksbox = server();

booksbox.get("/", home);
booksbox.get("/about", about)

// booksbox.mx
function home(peticion, resultado){
        resultado.send('<h1>HELLO WORLD</h1>');
}
