let $ = (id) => document.getElementById(id);
let click = () => console.log("CLICK");
let type = (input) => console.log(typeof(input));

let todoItems = [];

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);

    let content = "";
  
    reader.onload = function() {
      console.log(reader.result);
      content = reader.result;
      todoItems = content.match(/TODO:.*/g);
      //todoItems = Array.from(todoItems);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }

  function createList() {
    todoItems.forEach((item)=>{
        item = item.replace("TODO: ", "");
        var newItem = document.createElement("DIV");
        newItem.id = `listItem-${todoItems.indexOf(item)}`;
        newItem.innerHTML = item;
        $("listContent").appendChild(newItem);
        //TODO: build out list objects. Maybe as its own function?
    });
  }