const content = document.querySelector(".content-main")

function getApi() {
  fetch("https://api.github.com/users/DevLuanFagioni/repos")
  .then(async res => {
    if (!res.ok) {
      throw new Error(res.status)
    }

    let data = await res.json()
    
    data.forEach( rep => {
      let project = document.createElement("div")

      project.innerHTML = `
      <div class="project">
        <div>
          <h2 class="title">${rep.name}</h2>
          <a class="url" href="https://github.com/${rep.full_name}">${rep.url}</a>
        </div>
        <div>
          <p class="date">${ rep.created_at }</p>
          <p class="language">${rep.language}</p>
        </div>
      </div>
      `

      content.appendChild(project)
    })
  })
}

getApi()