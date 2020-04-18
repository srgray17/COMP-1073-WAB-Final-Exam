//https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json

let button = document.querySelector("button");

function getCatData() {
  fetch("https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json ")
.then(function(response) {
  return response.json();
}).then(function displayCats(jsonObj) {
    let cats = jsonObj.cats;

    for (let i = 0; i < cats.length; i++) {

      let article = document.createElement("article");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");

      let section = document.querySelector("section");

      h2.textContent = cats[i].name;
      p1.textContent = "Species: " + cats[i].species;
      p2.textContent = "Favorite Foods: " + cats[i].favFoods;
      p3.textContent = "Age: " + cats[i].age;


      article.appendChild(h2);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      section.appendChild(article);
    }
  }).catch(function(e) {
    console.log(e);
  });
}

button.onclick = getCatData;
