// creating const variable or let variable here cosnt
const body = document.getElementsByTagName("body")[0];//will accces the body tag with ref  array 0
//body.style.backgroundColor= ""

// creatign function onclick will cahnge the button color

function setColor(name){
    body.style.backgroundColor = name;

}
// setColor("")

function randomColor(){
    const red = Math.round(Math.random() * 255) ; //randomly generating the color number
    const green = Math.round(Math.random() * 255) ;
    const blue = Math.round(Math.random() * 255) ;
    const yellow = Math.round(Math.random() * 255) ;

    const color = `rgb(${red},${green}, ${blue},${yellow})`
    body.style.backgroundColor = color ; //calling the body element  to set background color to color constant

     }
// randomColor()