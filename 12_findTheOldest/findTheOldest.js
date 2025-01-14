const findTheOldest = function(people) {

        for (let person of people) {
            if (!person.yearOfDeath) {
                person.yearOfDeath = ((new Date()).getFullYear());
            };
        };
        
        let byOldest = people.sort((a, b) => {
            let ageOne = (a.yearOfDeath - a. yearOfBirth)
            let ageTwo = ((b.yearOfDeath - b. yearOfBirth))
            return (ageOne > ageTwo) ? -1 : 1 ;
        });
        
    return byOldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
