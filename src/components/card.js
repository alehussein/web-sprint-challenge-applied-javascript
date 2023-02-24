import { response } from "msw";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const authorName = document.createElement('span');

card.appendChild(headline);
card.appendChild(author);
author.appendChild(imageContainer);
imageContainer.appendChild(image);
author.appendChild(authorName);

card.classList.add('card');
headline.classList.add('headline');
headline.textContent = `${article.headline}`;
author.classList.add('author');
imageContainer.classList.add('img-container');
image.src = `${article.authorPhoto}`;
authorName.textContent = `By ${article.authorName}`;

card.addEventListener('click', () => {
  console.log(headline.textContent)
});

return card;
}


const cardAppender = (selector) => {
  const axios = require('axios')
  axios.get('http://localhost:5001/api/articles')
    .then(resp => {
      // console.log(resp.data.articles)
      const container = document.querySelector(selector);
      const data = resp.data.articles;
  for ( let key in data) {
    for ( let article of data[key]){
 container.appendChild(Card(article));
    }
  }
})

    .catch(err => {
      debugger

    })
//   // TASK 6
//   // ---------------------
//   // Implement this function that takes a css selector as its only argument.
//   // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
//   // However, the articles do not come organized in a single, neat array. Inspect the response closely!
//   // Create a card from each and every article object in the response, using the Card component.
//   // Append each card to the element in the DOM that matches the selector passed to the function.
//   //
}


export { Card, cardAppender }
