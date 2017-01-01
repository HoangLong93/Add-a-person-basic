function sortUser(child){
    // sort user
    var sortby = child.parentNode.getElementsByTagName("span")[0].innerHTML;
    if(child.parentNode.classList.contains("order")){
        // toggle reverse sort class
        child.parentNode.classList.remove("order");
        child.parentNode.classList.add("reverse");
        if(sortby == "Name"){
            sortByName(-1)
        }else if(sortby == "Gender"){
            sortByGender(-1);
        }else if(sortby == "Age"){
            sortByAge(-1);
        }
    }else{
        child.parentNode.classList.remove("reverse");
        child.parentNode.classList.add("order");
        if(sortby == "Name"){
            sortByName(1)
        }else if(sortby == "Gender"){
            sortByGender(1);
        }else if(sortby == "Age"){
            sortByAge(1);
        }
    }
}
function sortByName(reverse){
    // sort by name
    var tablebody = document.getElementById("listUsers").getElementsByTagName("tbody")[0];
    var tablerows = tablebody.getElementsByTagName("tr");                  
    var rows = [];
    for(var i = 0; i < tablerows.length; i++){
        rows.push(tablerows[i]);
    }
    var newrows = rows.sort(function(a,b){
        if(reverse == 1){
            return (a.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value > b.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value)
        }else{
            return (a.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value < b.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value)   
        }
    })
    for(var j = 0; j < newrows.length; j++){
        tablebody.appendChild(newrows[j]);
    }
}
function sortByGender(reverse){
    // sort by gender
    var tablebody = document.getElementById("listUsers").getElementsByTagName("tbody")[0];
    var tablerows = tablebody.getElementsByTagName("tr");                  
    var rows = [];
    for(var i = 0; i < tablerows.length; i++){
        rows.push(tablerows[i]);
    }
    var newrows = rows.sort(function(a,b){
        if(reverse == 1){
            return (a.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value > b.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value)
        }else{
            return (a.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value < b.getElementsByTagName("td")[1].getElementsByTagName("select")[0].value)   
        }
    })
    for(var j = 0; j < newrows.length; j++){
        tablebody.appendChild(newrows[j]);
    }
}
function sortByAge(reverse){
    // sort by age
    var tablebody = document.getElementById("listUsers").getElementsByTagName("tbody")[0];
    var tablerows = tablebody.getElementsByTagName("tr");                  
    var rows = [];
    for(var i = 0; i < tablerows.length; i++){
        rows.push(tablerows[i]);
    }
    var newrows = rows.sort(function(a,b){
        if(reverse == 1){
            return (a.getElementsByTagName("td")[2].getElementsByTagName("select")[0].value > b.getElementsByTagName("td")[2].getElementsByTagName("select")[0].value)
        }else{
            return (a.getElementsByTagName("td")[2].getElementsByTagName("select")[0].value < b.getElementsByTagName("td")[2].getElementsByTagName("select")[0].value)   
        }
    })
    for(var j = 0; j < newrows.length; j++){
        tablebody.appendChild(newrows[j]);
    }
}