// **Problem-1 User Age Filter**

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30

let name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];
function generateUserList(name, age) {
    let userList = [];

    for (let i = 0; i < name.length; i++) {
        let user = {
            name: name[i],
            age: age[i]
        };
        userList.push(user);
    }

    return userList;
}

function printUsersAboveAge(userList, ageThreshold) {
    for (let user of userList) {
        if (user.age > ageThreshold) {
            console.log(user.name);
        }
    }
}

let userList = generateUserList(name, age);
printUsersAboveAge(userList, 30);
