const dataButton = document.querySelector('#showData')
const myImage = document.querySelector('.myImage')
const myFollowers = document.querySelector('.followers');
const requestUrl = 'https://api.github.com/users/mdrubelahamed'
const xhr = new XMLHttpRequest(); // create xml http request
xhr.open('GET', requestUrl) // open the xhr(method, string)

dataButton.addEventListener('click', () => {
  xhr.onreadystatechange = function() {
    const data = JSON.parse(this.responseText);
    const image = data.avatar_url;
    const followers = data.followers;
    myImage.src = image;
    myFollowers.textContent = `You have ${followers} followers`
  }
  xhr.send()
})