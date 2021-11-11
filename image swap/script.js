//array of image names
const img = [1, 2, 3, 4, 5, 6, 7, 8,]
let startingImage = 1
const $mainimage = document.getElementById('mainimage')
const $thumbnailbox = document.getElementById('thumbnailbox')

//function to create thumbnails
function makeThumbnails(start) {
  const newElements = []
  for (let i = start; i <= start+3; i++){
    newElements.push(`<img src='./images/${img[i-1]}.gif' class='thumbnail'>`)
    const singleString = newElements.join('')
    $thumbnailbox.innerHTML = singleString
  }
}
//function to add hover/selection functionality to thumbnails
function queryThumbnail(){
  //selecting all items with the thumbnail class
  document.querySelectorAll('.thumbnail').forEach(item => {
    //adding css on hover
    item.addEventListener('mouseover', function() {
      item.setAttribute('style', 'opacity: 0.3; outline: white solid 5px;')
    })
    item.addEventListener('mouseout', function() {
      item.setAttribute('style', 'opacity: 1')
    })
    //changing main image to selected thumbnail
    item.addEventListener('click', function() {
      currentImg = item.getAttribute('src')
      $mainimage.innerHTML = `<img src='${currentImg}'>`
    })
  })
}
//loading everything when the window opens
window.onload = makeThumbnails(startingImage)
window.onload = queryThumbnail()


$mainimage.addEventListener('dblclick', function(){
  //setting the starting image to increment by 4 (this switches to the latter 4 images)
  startingImage = (startingImage + 4) % 8
  //remaking thumbnails using new starting position
  makeThumbnails(startingImage)
  //resetting main image using new starting position
  $mainimage.innerHTML = `<img src='./images/${img[startingImage-1]}.gif'>`
  //re-adding event listeners for thumbnails
  queryThumbnail()

})