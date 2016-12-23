function deleteUser(child){
    var content = document.createElement("div");
    content.className = "remove-container";
    var box = document.createElement("div");
    box.className = "confirmRemove";
    var headtext = document.createElement("H3");
    var ht = document.createTextNode("Remove person");
    headtext.appendChild(ht);
    var text = document.createElement("P");
    var t = document.createTextNode("Are you sure you want to remove this entry?");
    text.appendChild(t);
    var cancel = document.createElement("BUTTON");
    var c = document.createTextNode("CANCEL");
    cancel.appendChild(c);
    var yes = document.createElement("BUTTON");
    var y = document.createTextNode("YES");
    yes.appendChild(y);
    box.appendChild(headtext);
    box.appendChild(text);
    box.appendChild(cancel);
    box.appendChild(yes);
    content.appendChild(box);
    document.body.appendChild(content);
    cancel.onclick = function(){
        document.body.removeChild(content);
    }
    yes.onclick = function(){
        var row = child.parentNode.parentNode;
        row.parentNode.removeChild(row);
        document.body.removeChild(content);
    }
}