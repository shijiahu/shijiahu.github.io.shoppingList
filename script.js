var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var del = document.getElementsByClassName("deleteItem");

function inputLength() {
	return input.value.length;
}

for (var i = 0; i < list.length; i++) {
	var button1 = document.createElement("button");
	button1.appendChild(document.createTextNode("delete"));
	button1.className = "deleteItem";
	list[i].appendChild(button1);
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button1 = document.createElement("button");
	button1.appendChild(document.createTextNode("delete"));
	button1.className = "deleteItem";
	li.appendChild(button1);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// for (var i = 0; i < list.length; i++) {
// 	list[i].addEventListener("click", function(){
// 		classList.toggle("done");
// 	})
// }



function deleteorCrossListItem(event) {
 
    var clickItem = event.target;
    if (clickItem.nodeName === "LI") {
        clickItem.classList.toggle('done');
    }
    else if (clickItem.nodeName === 'BUTTON') {
        document.querySelector('ul').removeChild(clickItem.parentNode);
    }

}
 

ul.addEventListener("click", deleteorCrossListItem);









