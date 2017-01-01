// users data
var users = [
    {
        id: "1",
        name: "John Doe",
        gender: "Male",
        age: 32
    },
    {
        id: "2",
        name: "Diana Barry",
        gender: "Female",
        age: 28
    },
    {
        id: "3",
        name: "Bruce Wayne",
        gender: "Male",
        age: 46
    },
    {
        id: "4",
        name: "Jane Porter",
        gender: "Female",
        age: 19
    },
    {
        id: "5",
        name: "Lucy Steele",
        gender: "Female",
        age: 31
    },
    {
        id: "6",
        name: "Oliver Twist",
        gender: "Male",
        age: 56
    },
    {
        id: "7",
        name: "Donald Duck",
        gender: "Male",
        age: 76
    }
];
function renderUser(users){
    var table = document.getElementById("listUsers");
    // render table head
    var tablehead = document.createElement("thead");
    var thead = document.createElement("tr");
    var th1 = document.createElement("td");
    th1.className = "name";  
    th1.innerHTML = '<span>Name</span><button class="sort-icon" onclick="sortUser(this)"></button>';
    thead.appendChild(th1);
    var th2 = document.createElement("td");
    th2.className = "gender";  
    th2.innerHTML = '<span>Gender</span><button class="sort-icon" onclick="sortUser(this)"></button>';
    thead.appendChild(th2);
    var th3 = document.createElement("td");
    th3.className = "age";  
    th3.innerHTML = '<span>Age</span><button class="sort-icon" onclick="sortUser(this)"></button>';
    thead.appendChild(th3);
    tablehead.appendChild(thead);
    // render users table
    var tablebody = document.createElement("tbody");
    for (i = 0; i < users.length; i++){
        var tr = document.createElement("tr");
        var name = document.createElement("td");
        name.className = "name";
        name.innerHTML = '<input value="' + users[i].name + '" readonly/>';
        tr.appendChild(name);
        var gender = document.createElement("td");
        gender.className = "gender";
        gender.innerHTML = '<select disabled><option selected disabled>' + users[i].gender +'</option><option value="Male">Male</option><option value="Female">Female</option></select>';
        tr.appendChild(gender);
        var age = document.createElement("td");
        age.className = "age";
        age.innerHTML = '<select id="selectAge" class="selectAge" disabled><option selected disabled>' + users[i].age + '</option></select>';
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
    }
    table.appendChild(tablehead);
    table.appendChild(tablebody);
}

window.onload = renderUser(users);