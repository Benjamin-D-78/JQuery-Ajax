$.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    type: "GET",
    success: (response) => {

        let monDiv = document.getElementById("photos")
        response.forEach(ima => {
            monDiv.innerHTML +=
                `<div>
                url : ${ima.url} <br>
                </div>`;
        });

    },
    error: (xhr, status, error) => {
        console.log(`Erreur Ajax ${error}`);
    }
})