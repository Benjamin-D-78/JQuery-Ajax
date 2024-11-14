$(document).ready(() => {
    // Récupère l'ID de l'article depuis L'URL
    const urlParmas = new URLSearchParams(window.location.search)
    const articleId = urlParmas.get('id')

    console.log(articleId);

    // On récupère la liste des articles

    $.ajax({
        url: `http://localhost:8000/api/article/get/${articleId}`,
        method: "GET",
        success: (article) => {
            console.log(article.name)
            // Afficher les détails de l'article
            const articleDetails = `
            <img src="${article.picture[0].img}" width="200" alt="${article.name}"/>
            <p>
            Nom = ${article.name}
            Catégorie = ${article.category}
            </p>
            `

            $("#article").html(articleDetails)



        },
        error: (xhr,status, error) => {
            console.error(`Erreur : ${error}`);
        }
    })

                // Bouton de mise à jour pour rediriger vers la page update.html avec l'ID de l'article.
                $("#updateArticle").on("click", () => {
                    window.location.href =`../updates/updateArticle.html?id=${articleId}`
                })


    $("#deleteArticle").on("click", () => {
        // Ajax pour supprimer
        
        $.ajax({
            url: `http://localhost:8000/api/article/delete/${articleId}`,
            method: "DELETE",
            success: (article) => {
                console.log("article supprimé avec succès");
                window.location.href = "../index.html"
    
            },
            error: (xhr,status, error) => {
                console.error(`Erreur : ${error}`);
            }
        })
    
    })
})







