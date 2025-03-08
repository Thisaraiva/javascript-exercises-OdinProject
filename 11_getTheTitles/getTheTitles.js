const getTheTitles = function (list) {

    //let titles = [];

    /*for (const title of list) {
        titles.push(title.title);
    }
        
    return titles;*/

    return list.map(titles => titles.title);   
};

// Do not edit below this line
module.exports = getTheTitles;