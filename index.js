let body = document.getElementById("container");

let p = function (container, content) {
    let newP = document.createElement("P");
    container.appendChild(newP);
    newP.textContent = content;
}

const numbers = [1,2,3,4,5];

numbers.forEach((i)=>p(body,i))
p(body,"Hello, Joe");