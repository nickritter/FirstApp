let $ = (id) => document.getElementById(id);
let click = () => console.log("CLICK");

let type = (input) => console.log(typeof(input));

let todoItems = [];
let inputLines = [];

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);

    let content = "";
  
    reader.onload = function() {
      console.log(reader.result);
      content = reader.result;
      todoItems = content.match(/TODO:.*/g);    //find all TODO items
      inputLines = content.split('\n');         //split whole document by lines
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
}

function createE (container, content, element, {id,c,name,type}) {
    let newItem = document.createElement(element);
    if (typeof id !== 'undefined') {newItem.setAttribute("id",id);}
    if (typeof c !== 'undefined') {newItem.setAttribute("class",c);}
    if (typeof name !== 'undefined') {newItem.setAttribute("name",name);}
    if (typeof type !== 'undefined') {newItem.setAttribute("type",type);}
    newItem.innerHTML = content;
    $(container).appendChild(newItem);
    return newItem;
}

function createCard(container, content, id, linenumber) {
    let id2 = `listItem-${id}`;
    let newCard = createE(container,'',"DIV", {id:id2,c:"listItem"});
    let newChk = createE(id2,'',"INPUT", {type:"checkbox",name:"complete",c:"completeBox"});
    let newLine = createE(id2,linenumber,"P",{c:"lineNumber"});
    let newContent = createE(id2,content,"P",{c:"listNote"});
}

function createList(container) {
    console.log(todoItems);
    todoItems.forEach((item)=>{
        let item2 = item.replace("TODO: ", "");
        let lineNumber = inputLines.findIndex((i) => i.indexOf(item) >= 0)+1;
        createCard(container,item2,todoItems.indexOf(item)+1, lineNumber);
    });
}

let toggleDisplay = (id) => {
    if ($(id).style.display == "none") {
        $(id).style.display = "flex";
    } else {
        $(id).style.display = "none";
    }
}