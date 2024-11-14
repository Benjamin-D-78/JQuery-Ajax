// Cela fait office de "addEventListener", ça a la même fonctionnalité dans ce cas précis.
$("#postForm").on("submit", (event) => {
    
    event.preventDefault()// "event.preventDefault" empêche le rechargement de la page.

    // Récupération des valeurs du formulaire
    const articleDataForm = {
        name: $("#name").val(),
        category: $("#categorie").val(),
        brand: $("#brand").val(),
        // Les valeurs chiffrées ont besoin d'être converties avec le bon type pour bien matcher avec la base de données. (parseFloat pour les nombres décimaux), (parseInt pour les nombres entiers).
        price: parseFloat($("#price").val()),
        content: $("#content").val(),
        stock: parseInt($("#stock").val()),
        online: $("#online").is(":checked"),
        picture: [
            {
                img: $("#img").val()
            }
        ]
    }

    console.log(articleDataForm);
    
    // Envoi des données via une requête ajax

    $.ajax({
        url: "http://localhost:8000/api/article/add",
        type: "POST",
        contentType: "application/json",
        // On relie l'articleDataForm que l'on a créé juste UserActivation, comme ça le code reste propre et non mélanfé
        data: JSON.stringify(articleDataForm),
        success: (data) => {
            console.log(`L'article ajouté avec succès : ${response}`);
        },
        error: (xhr, status, error) => {
            console.log(`Erreur lorsde l'ajout de l'article ${error}`)
        }

    })

})


