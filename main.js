const REPO_URL = 'https://api.github.com/users/CalebNash/repos';
const USER_URL = 'https://api.github.com/users/CalebNash';
const ORGS_URL = 'https://api.github.com/users/CalebNash/orgs';


fetch(REPO_URL)
  .then(response => response.json())
  .then(res => {
    console.log(res);
    buildRepos(res);
  })
  .catch(error => console.log(error));

function buildRepos(array) {
  var source = document.getElementById("repo-template").innerHTML;
  // console.log('source', source);
  var template = Handlebars.compile(source);
  // console.log(template);

  var context = {
    repos: array,
  };

  var html = template(context);
  console.log(html);

  document.querySelector('.repositories').innerHTML = html;
}



fetch(USER_URL)
  .then(response => response.json())
  .then(res => {
    console.log(res);
    buildUser(res);
  })
  .catch(error => console.log(error));

  function buildUser(user) {
    var source = document.getElementById("user-template").innerHTML;
    // console.log('source', source);
    var template = Handlebars.compile(source);
    // console.log(template);

    var context = user;

    var html = template(context);
    console.log(html);

    document.querySelector('.profile').innerHTML = html;
  }

  fetch(ORGS_URL)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      buildOrgs(res);
    })
    .catch(error => console.log(error));

    function buildOrgs(orgs) {
      var source = document.getElementById("orgs-template").innerHTML;
      // console.log('source', source);
      var template = Handlebars.compile(source);
       // console.log(orgs.avatar_url);

      var context = {
        orgs: orgs
      }
      var html = template(context);
      console.log(html);

      document.querySelector('.organizations').innerHTML = html;
    }
