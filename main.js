document.getElementById("search-btn").addEventListener('click', async () => {
    const username = document.getElementById('search-input').value
    if (!username) {
        alert("Enter Username")
    }
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        const data = await res.json()
        const resultdiv = document.querySelector('.result-section')
        resultdiv.innerHTML = ""

        data.forEach(x => {
            resultdiv.innerHTML +=
                `
        <div>
        <h2>${x.name}</h2>
        <p>${x.description}</p>
        </div>
        `
        })

    } catch (err) {
        alert("Error:" + err)
    }
})