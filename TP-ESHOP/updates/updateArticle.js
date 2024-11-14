$(document).ready(() => {
    // Récupère l'ID de l'article depuis L'URL
    const urlParmas = new URLSearchParams(window.location.search)
    const articleId = urlParmas.get('id')

    $.ajax({
        url: `http://localhost:8000/api/article/get/${articleId}`,
        method: 'GET',
        success: (article) => {
            $('#name').val(article.name);
            $('#categorie').val(article.category);
            $('#brand').val(article.brand);
            $('#price').val(article.price);
            $('#content').val(article.content);
            $('#stock').val(article.stock);
            $('#online').prop('checked', article.online)
            $('#img').val(article.picture[0].img);
        },
        error: (xhr, status, error) => {
            console.error(`Erreur : ${error}`);
        }
    })

    $('#updateForm').on('submit', (event) => {
        event.preventDefault();

        // Récupération des valeurs du formulaire
        const articleDataForm = {
            name: $('#name').val(),
            category: $('#categorie').val(),
            brand: $('#brand').val(),
            price: parseFloat($('#price').val()),
            content: $('#content').val(),
            stock: parseInt($('#stock').val()),
            online: $('#online').is(':checked'),
            picture: [
                {
                    img: $('#img').val()
                }
            ]
        }

        // Envoi des données via une requete Ajax
        $.ajax({
            url: `http://localhost:8000/api/article/update/${articleId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(articleDataForm),
            success: (response) => {
                console.log(`succès mis à jour : ${response}`);
                window.location.href = `../detail/detailArticle.html?id=${articleId}`
            },
            error: (xhr, status, error) => {
                console.error(`Erreur lors de la mise à jour de l'article : ${error}`);
            }
        })

    })

})