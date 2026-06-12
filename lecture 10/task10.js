let actions = {};

for (let user of users) {

    for (let action of user.actions) {
        actions[action] = (actions[action] || 0) + 1;
    }
}

console.log(actions);