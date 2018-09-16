function getToken(token) {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo(getToken) {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = ''
  const postData = {
    title:''
    body: ''
  }
  fetch('https://github.com/learn-co-curriculum/js-ajax-fetch-lab',{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
    Authorization: `token ${token}`
    }
    }
    ).then(res => console.log(res));
      })
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
