let people = [{
        account: "string 1",
        pin: "this",
        other: "that"
    },
    {
        account: "string 2",
        pin: "this",
        other: "that"
    }
];



let person = people.find(o => o.name === 'string 1');

person.account;
person.pin

let person = people.find(function(person) {
    if (person.account === "string 1" && person.pin === "this") {
        return true;
    } else {
        return false
    }
});



function searchPerson(people, account) {
    for (let i = 0; i < people.length; i++) {
        return people[0].account === account;
    }

    return false;
}