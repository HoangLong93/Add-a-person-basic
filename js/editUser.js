function editUser(child){
    // edit user
    var row = child.parentNode.parentNode;
    var name = row.cells[0];
    var gender = row.cells[1];
    var age = row.cells[2];
    if(row.classList.contains('editable')){
        // toggle class editable
        row.classList.remove('editable');
        name.getElementsByTagName("input")['0'].readonly = true;
        gender.getElementsByTagName("SELECT")[0].disabled="true"; 
        gender.getElementsByTagName("SELECT")[0].classList.remove('selectArrow');
        age.getElementsByTagName("SELECT")[0].disabled="true";                 
        age.getElementsByTagName("SELECT")[0].classList.remove('selectArrow');
    }else{
        row.classList.add('editable');
        name.getElementsByTagName("input")['0'].removeAttribute("readonly");
        gender.getElementsByTagName("SELECT")[0].disabled=""; 
        gender.getElementsByTagName("SELECT")[0].classList.add('selectArrow');
        age.getElementsByTagName("SELECT")[0].disabled="";                 
        age.getElementsByTagName("SELECT")[0].classList.add('selectArrow');
    }
}