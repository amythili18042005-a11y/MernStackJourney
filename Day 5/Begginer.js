function getUserInitials(user) {
    return user.firstName[0] + user.lastName[0];
}

console.log(getUserInitials({ firstName: "Rahul", lastName: "Sharma" }));