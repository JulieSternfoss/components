const CHEESES = [
    {
        name: "Feta",
        price: "14.95",
        descriptiop: "creamy"
    },

    {
        name: "Gauda",
        price: "29.99",
        descriptiop: "bla bla"
    },
  

]

CHEESES.forEach(function (element) {
    const ARTICLE =document.createElement("article")
    ARTICLE.className = "cheeseCard"
    ARTICLE.innerHTML +=`<p class="cheesCard__overskrift"> ${element.name}</p>`
    ARTICLE.innerHTML +=`<p class="cheesCard__pris"> kr ${element.price}</p>`//`template string//
    document.body.append(ARTICLE)

})