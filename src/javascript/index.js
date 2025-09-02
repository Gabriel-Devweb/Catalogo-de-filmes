function pesquisar() {
    let name = document.getElementById('form-name').value
    let film = document.getElementById('form-film').value
    let info = document.getElementById('info')

    if (name == '' || film == '') {
        alert("Preencha todos os campos corretamente")
    } else {
        fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(film)}&apikey=e2ff2dc8`)
            .then(response => response.json())
            .then(data => {
                if (data.Response == "False") {
                    info.style.display = 'block'
                    info.innerHTML = `<p>Filme não encontrado!</p>`
                    return
                }

                info.style.display = 'block'
                info.innerHTML = `
                    <h2>Olá ${name}, aqui estão as informações do filme:</h2>
                    <h3>${data.Title} (${data.Year})</h3>
                    <p><strong>Diretor:</strong> ${data.Director}</p>
                    <p><strong>Gênero:</strong> ${data.Genre}</p>
                    <p><strong>Nota IMDb:</strong> ${data.imdbRating}</p>
                    <img src="${data.Poster}" alt="Poster do filme" style="width:100%; margin-top:10px; border-radius:8px;">
                `
            })
            .catch(error => {
                info.style.display = 'block'
                info.innerHTML = `<p>Filme não encontrado!</p>`
                console.error(error)
            })
    }
}