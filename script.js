// JavaScript
function searchFunction() {
    // Declare variables
    let input = document.getElementById('searchbar');
    let filter = input.value.toUpperCase();
    let body = document.getElementsByTagName('body')[0];
    let text = body.innerText || body.textContent;
    let words = text.split(' ');
  
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word) {
        if (word.toUpperCase().indexOf(filter) > -1) {
          body.innerHTML = body.innerHTML.replace(word, '<mark>' + word + '</mark>');
        } else {
          body.innerHTML = body.innerHTML.replace('<mark>' + word + '</mark>', word);
        }
      }
    }
  }
  