let resdata = []
let displayData = []
let currIndex = 10
function renderdata(data) {
    const resultdiv = document.querySelector('.result-section')
    const viewbtn = document.getElementById("view-more-btn")

    resultdiv.innerHTML = data.slice(0, currIndex)
        .map(x => `
        <div>
                <h2>${x.name}</h2>
                <p>${x.description}</p>
            </div >
            `).join("")
    viewbtn.style.display = currIndex < data.length ? "block" : "none"
}
document.getElementById("search-btn").addEventListener('click', async () => {
    const username = document.getElementById('search-input').value
    if (!username) {
        alert("Enter Username")
    }
    try {

        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        const data = await res.json()
        resdata = data
        displayData = data
        currIndex = 10

        renderdata(displayData)
    } catch (err) {
        alert("Error:" + err)
    }
})

const togglebtn = document.getElementById("toggle")
togglebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    const isdark = document.body.classList.contains("dark")

    togglebtn.innerText = isdark ? "Light Mode" : "Dark Mode"
})
document.getElementById("sort-filter").addEventListener("change", (e) => {
    let sorted

    if (e.target.value == "a-z") {
        sorted = [...resdata].sort((a, b) => a.name.localeCompare(b.name))
    } else if (e.target.value == "z-a") {
        sorted = [...resdata].sort((a, b) => b.name.localeCompare(a.name))

    } else {
        sorted = resdata
    }
    displayData = sorted
    currIndex = 10
    renderdata(displayData)
})
document.getElementById("view-more-btn").addEventListener("click", () => {
    currIndex += 10
    renderdata(displayData)
})