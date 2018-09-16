function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch('https://github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',{
    method: 'POST',
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json());
    .then(json => showResults(json));
      })
  //use fetch to fork it!
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url}</a>`;
  //use this function to display the results from forking via the API
}

function createIssue() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/issues`;

  const postData = {
    title: document.getElementById('title').value,
     body: document.getElementById('body').value
   };

fetch('url',
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json());
  .then(json => json.getIssues());
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/issues`;

  fetch('url',
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then (json => console.log(json));

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
