const findTheOldest = function (array) {

    if (array.length === 0) return undefined;

    const getAge = (person) => {
        const currentYear = new Date().getFullYear();
        const deathYear = person.yearOfDeath || currentYear;
        return deathYear - person.yearOfBirth;
    };

    return array.reduce((oldest, current) => {                
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        return oldestAge < currentAge ? current : oldest;
    }, array[0]);

};

// Do not edit below this line
module.exports = findTheOldest;