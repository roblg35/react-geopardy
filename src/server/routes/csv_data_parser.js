module.exports = {

  //This function creates an array of category objects to be posted to the db
  findCategories: function (data, gameID) {

    var categories = [];

    data.forEach(function (el) {
        if(!categories.includes(el[4]))
          categories.push(el[4]);
    });

    return categories.map(function(name) {
        return {
            name: name,
            game_id: gameID
        };
    });
  },
  //This function prepares an array of questions for the db
  makeQuestions: function (data, categoryObjs, gameID) {

        var questions = [];

        for (var i = 1; i < data.length; i++) {

            var catID = null;

            for (var j = 0; j < categoryObjs.length; j++) {
                if (categoryObjs[j].name === data[i][4])
                    catID = categoryObjs[j].id;

            }

            questions.push({
                question: data[i][1],
                answer: data[i][2],
                points: data[i][0],
                daily_double: data[i][3],
                played: false,
                game_id: gameID,
                category_id: catID
            });
        }

        return questions;
  }

};