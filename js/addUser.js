function validateForm(){
    // Validate add user Form
        var uname = document.getElementById("UserName");
        var ugender = document.getElementById("UserGender");
        var uage = document.getElementById("UserAge");
        if(name(uname)){
            if(selectGender(ugender)){
                if(selectAge(uage)){
                    addUser();
                }
            }
            return false;
        }
    }

    function name(uname){
        // check username
        if(uname.value == ""){
            alert("Please enter your name");
            return false;
        }else{
            return true;
        }
    }
    function selectGender(ugender){
        // check usergender
        if(ugender.value == "Gender"){
            alert('Please choose your gender'); 
            return false
        }else{
            return true;
        }
    }
    function selectAge(uage){
        // check userage
        if(uage.value == "Age"){
            alert('Please choose your age');
            return false
        }else{
            return true;
        }
    }

function addUser(){
    // add user
    var tablebody = document.getElementById("listUsers").getElementsByTagName("tbody")[0];
    var tr = document.createElement("tr");
    var name = document.createElement("td");
    name.className = "name";
    name.innerHTML = '<input value="' + (document.getElementById("UserName").value) + '" readonly/>';
    tr.appendChild(name);
    var gender = document.createElement("td");
    gender.className = "gender";
    gender.innerHTML = '<select disabled><option selected disabled>' + (document.getElementById("UserGender").value) +'</option><option value="Male">Male</option><option value="Female">Female</option></select>';
    tr.appendChild(gender);
    var age = document.createElement("td");
    age.className = "age";
    age.innerHTML = '<select id="selectAge" class="selectAge" disabled><option selected disabled>' + (document.getElementById("UserAge").value) + '</option></select>';
    tr.appendChild(age);
    var editUser = document.createElement("td");
    editUser.className = "edit";
    editUser.innerHTML = '<div class="editUser" onclick="editUser(this)"><button></button><span></span></div>';
    tr.appendChild(editUser);
    var deleteUser = document.createElement("td");
    deleteUser.className = "delete";
    deleteUser.innerHTML = '<button class="deleteUser" onclick="deleteUser(this)"></button>';
    tr.appendChild(deleteUser);
    tablebody.appendChild(tr);
    loaddropdown();
}