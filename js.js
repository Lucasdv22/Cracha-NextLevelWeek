var userInfo = {
  github: 'Lucasdv22',
  linkedin: 'Lucas Vasconcelos',
  outlook: 'vascoonline@outlook.com'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('classs')

    li.children[0].href = `https://api.github.com/users/${userInfo.github}`
  }
}

function getGitHubUserInfos() {
  const url = `https:api.github.com/users/${userInfo.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.login
    })
}

getGitHubUserInfos()
