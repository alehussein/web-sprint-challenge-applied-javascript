const Tabs = (topics) => {
  const topicsContainer = document.createElement('div');
  topicsContainer.classList.add('topics');

  topics.forEach((topic) => {
    const topictab = document.createElement('div');
    topictab.classList.add('tab');
    topictab.textContent = topic;

    topicsContainer.appendChild(topictab);
    
  });

  return topicsContainer;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  
}

const tabsAppender = (selector) => {
  const axios = require('axios')
  axios.get('http://localhost:5001/api/topics')
  .then(res => {
    const topics = res.data.topics;
    const container = document.querySelector(selector);
    const tabs = Tabs(topics);
    container.appendChild(tabs);
  })
.catch(err => {
  console.log('Error', err)
  debugger
})

//   // TASK 4
//   // ---------------------
//   // Implement this function which takes a css selector as its only argument.
//   // It should obtain topics from this endpoint: `otra funcion establecidan` (test it with a console.log!).
//   // Find the array of topics inside the response, and create the tabs using the Tabs component.
//   // Append the tabs to the element in the DOM that matches the selector passed to the function.
//   //
}




export { Tabs, tabsAppender }
