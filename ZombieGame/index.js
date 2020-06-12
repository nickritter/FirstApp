let $  = (element) => document.getElementById(element);

let div = function (container, content, elementId) {
    let newP = document.createElement("Div");
    container.appendChild(newP);
    newP.textContent = content;
    newP.setAttribute("class",elementId);
    return newP;
}

let players = {
    1:{name:"Matt",score:0,turn:false},
    2:{name:"Dave",score:0,turn:false}
};

for (let person in players) {
    let newElement = div($("players"),person.name + " : " + person.score,"player");
    newElement.id = person;
}



const rollResults = ['S','F','B'];

rollResults.forEach((result)=>{
    let newResult = div($("rollResults"),result,"rollResult");
    newResult.id = result;
})