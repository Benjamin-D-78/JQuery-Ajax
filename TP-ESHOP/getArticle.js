$(document).ready(() => {

    // On récupère la liste des articles

$.ajax({
    url: "http://localhost:8000/api/article/get",
    type: "GET",
    success: (articles) => {
        console.log(articles)

        let articleElements = ""
        articles.forEach(article => {
            articleElements +=
                
                `<a href="detail/detailArticle.html?id=${article._id}">
                <img src="${article.picture[0].img}" alt="${article.name}" width="200">
                <p>
                Name : ${article.name} <br>
                Marque : ${article.brand} <br>
                Prix: ${article.price} <br>
                </p>
                </a>
                `;
        });
        $('#articleList').html(articleElements)
    },
    error: (xhr, status, error) => {
        console.log(`Erreur Ajax ${error}`);
    }
    })
})