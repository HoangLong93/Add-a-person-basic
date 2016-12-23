var users = [
    {
        id: 1,
        name: "John Doe",
        gender: "Male",
        age: 32
    },
    {
        id: 2,
        name: "Diana Barry",
        gender: "Female",
        age: 28
    },
    {
        id: 3,
        name: "Bruce Wayne",
        gender: "Male",
        age: 46
    },
    {
        id: 4,
        name: "Jane Porter",
        gender: "Female",
        age: 19
    },
    {
        id: 5,
        name: "Lucy Steele",
        gender: "Female",
        age: 31
    },
    {
        id: 6,
        name: "Oliver Twist",
        gender: "Male",
        age: 56
    },
    {
        id: 7,
        name: "Donald Duck",
        gender: "Male",
        age: 76
    },
];
$(function(){
    for (i = 0; i <= users.length; i++){
        var user = '<tr id="' + users[i].id + '">';
        user += '<td><p contenteditable="false">' + users[i].name + '</p></td>';
        user += '<td><select disabled><option selected disabled>' + users[i].gender +'</option><option value="male">Male</option><option value="female">Female</option></select></td>';
        user += '<td><select name="selectAge" class="selectAge" disabled><option selected disabled>' + users[i].age + '</option></select></td>';
        user += '<td><div class="editUser" onclick="editUser(this)"><button></button>';
        user += '<span></span></div></td>';
        user += '<td><button class="deleteUser" onclick="deleteUser(this)"></button></td>';
        $('#listUsers tr:last').after(user);
    }
})