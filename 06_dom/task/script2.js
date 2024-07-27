function changeContent() {
  const heading = document.getElementById('main-heading');
  const paragraph = document.getElementById('intro');
  const image = document.getElementById('sample-image');
  const changeContentButton = document.getElementById('change-content');
  const toggleImageButton = document.getElementById('toggle-image');

  // Task 1: Change the text of the heading and paragraph
  changeContentButton.addEventListener('click', () => {
    document.querySelector('#main-heading').textContent = 'DOM Manipulation in Action';
    document.querySelector('#intro').textContent = 'The content has been changed successfully!';
  });

  // Task 2: Change the image source
  toggleImageButton.addEventListener('click', () => {
    // Task 2: Toggle the visibility of the image
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

}
changeContent();